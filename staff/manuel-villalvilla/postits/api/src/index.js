const express = require('express')
const api = express()
const { authenticateUser, registerUser, updateEmail, retrieveUser, updatePassword } = require('./logic')
const { CredentialsError, DuplicityError, FormatError, NotFoundError, SystemError } = require('./errors')
const mongoose = require('mongoose')
const axios = require('axios') // cliente http para node y para el browser
const jwt = require('jsonwebtoken')
const { logger } = require('./utils')

const cookieParser = require('cookie-parser') // parsea cookies del req y las pone en req.cookies --> middleware function
const jsonBodyParser = express.json(); // ... const body = JSON.parse(json) -> req.body = body. --> middleware function

(async () => {

    await mongoose.connect('mongodb://localhost:27017/postits') // si tiene resolucion negativa, lanza un error y se va

    logger.info('db connected')

    api.use(cookieParser())
    api.use(jsonBodyParser)

    /* Homepage with country guessing and cookie processing  */

    let countryCode

    api.get('/', (req, res) => {
        // const ip = req.ip // to implement
        const ipSpain = '81.43.200.106'
        const ipMexico = '131.72.228.24'

        let randomIP = '' // tengo q asignarle un string vacio para despues llenarlo con strings
        for (let i = 0; i < 4; i++) {
            randomIP += Math.floor(Math.random() * 255) + 1
            if (i < 3) randomIP += '.'
        }

        const cookie = req.cookies // devuelve un objeto q puede estar vacio

        if (!Object.hasOwn(cookie, 'country')) {
            axios.get(`https://ipwho.is/${randomIP}`)
                .then(response => {
                    const { data: { country_code: resCountryCode } } = response
                    if (!resCountryCode) return res.status(200).send('country not found')
                    countryCode = resCountryCode.toLowerCase() // me tira error aqui cuando la api no procesa bien la ip
                    res.cookie('country', countryCode, { maxAge: 5000 }) // 5 segundos
                    res.status(200).send(`cookie set with country: ${countryCode}`)
                })
                .catch(error => {
                    logger.error(error)
                    res.status(500).json({ error: 'system error' })
                })
        } else {
            countryCode = cookie.country
            res.status(200).send(`cookie found with country: ${countryCode}`)
        }
    })

    /* User registration */

    api.post('/api/users', (req, res) => {
        try {
            const { body: { name, email, password } } = req

            registerUser(name, email, password)
                .then(() => {
                    res.status(201).send()
                    logger.info(`user ${email} registered`)
                })
                .catch(error => {
                    if (error instanceof DuplicityError) 
                        res.status(409).json({ error: error.message })
                    else if (error instanceof SystemError) 
                        res.status(500).json({ error: 'system error' })
                    
                    logger.error(error)
                    return
                })
        } catch (error) {
            if (error instanceof FormatError || error instanceof TypeError)
                res.status(400).json({ error: error.message })
            
            else
                res.status(500).json({ error: 'system error' })
            
            logger.error(error)
        }
    })

    /* User authentication */

    api.post('/api/users/auth', (req, res) => {
        try {
            const { body: { email, password } } = req

            authenticateUser(email, password)
                .then(userId => {
                    const token = jwt.sign({ data: userId }, 'ilovethisshit', { expiresIn: '1h' })
                    res.json({ token })
                    logger.info(`user ${email} authenticated`)
                })
                .catch(error => {
                    if (error instanceof CredentialsError || error instanceof NotFoundError)
                        res.status(401).json({ error: 'wrong credentials' }) // de la api hacia afuera cambio el mensaje del error

                    else
                        res.status(500).json({ error: 'system error' })
    
                    logger.error(error)
                    return
                })
        } catch (error) {
            if (error instanceof FormatError || error instanceof TypeError)
                res.status(400).json({ error: error.message })
            else
                res.status(500).json({ error: 'system error' })

            logger.error(error)
        }
    })

    /* Retrieve user */

    api.get('/api/users', (req, res) => {
        let userId

        if (req.headers.authorization) {
            const token = req.headers.authorization.split(' ')
            if (token && token[1]) {
                try {
                    const decoded = jwt.verify(token[1], 'ilovethisshit') // esto puede lanzar error q debo capturar
                    userId = decoded.data
                } catch (error) {
                    res.status(401).json({ error: 'invalid token' })
                    logger.error(error)
                    return
                }
            }
        } else {
            res.status(401).json({ error: 'invalid token' })
            logger.error(error)
            return
        }
        
        retrieveUser(userId)
            .then(user => {
                res.json(user)
                logger.info(`user ${userId} retrieved`)
            })
            .catch(error => {
                res.status(401).json({ error: 'invalid token' })
                logger.error(error)
            })
    })

    api.patch('/api/users', (req, res) => {
        const { body: { email: newEmail, oldPassword, password: newPassword, notes } } = req
        let userId

        if (req.headers.authorization) {
            const token = req.headers.authorization.split(' ')
            if (token && token[1]) {
                try {
                    const decoded = jwt.verify(token[1], 'ilovethisshit') // esto puede lanzar error q debo capturar
                    userId = decoded.data
                } catch (error) {
                    res.status(401).json({ error: error.message })
                    logger.error(error)
                    return
                }
            }
        } else {
            res.status(401).json({ error: 'invalid token' })
            logger.error(error)
            return
        }

        /* Email update */

        if (newEmail && !newPassword && !oldPassword && !notes) {
            try {
                updateEmail(userId, newEmail)
                    .then(() => {
                        res.status(204).send()
                        logger.info(`user ${userId} changed email to ${newEmail}`)
                    })
                    .catch(error => {
                        if (error instanceof DuplicityError)
                            res.status(409).json({ error: error.message })

                        else
                            res.status(500).json({ error: 'system error' })

                        logger.error(error)
                        return
                    })
            } catch (error) {
                if (error instanceof FormatError || error instanceof TypeError)
                    res.status(400).json({ error: error.message })

                else
                    res.status(500).json({ error: 'system error' })

                logger.error(error)
                return
            }

        /* Password Update */

        } else if (!newEmail && newPassword && oldPassword && !notes) {
            try {
                updatePassword(userId, oldPassword, newPassword)
                    .then(() => {
                        res.status(200).send()
                        logger.info(`user ${userId} updated password`)
                    })
                    .catch(error => {
                        if (error instanceof CredentialsError) 
                            res.status(401).json({ error: error.message })
                            
                        else
                            res.status(500).json({ error: 'system error' })

                        logger.error(error)
                        return
                    })
            } catch (error) {
                if (error instanceof FormatError || error instanceof TypeError)
                    res.status(400).json({ error: error.message })

                else
                    res.status(500).json({ error: 'system error' })

                logger.error(error)
                return
            }
        } else {
            res.status(400).json({ error: 'wrong petition' })
            logger.error('wrong petition')
            return
        }
    })

    api.listen(8080, () => logger.info('api started'))

    // SIGINT - señal de interrupcion
    process.on('SIGINT', async () => { // similar a eventListener pero de node. SIGINT = CTRL+C
        await mongoose.disconnect()

        logger.info('db disconnected')

        logger.info('api stopped')

        process.exit(0) // para q pare el server, porque ahora yo he tomado el control de CTRL+C
    })

})();





