const express = require('express')
const api = express()
const { authenticateUser, registerUser } = require('./logic')
const { CredentialsError, DuplicityError, FormatError } = require('./errors')
const { validateText, validateEmail, validatePassword } = require('./validators')
const mongoose = require('mongoose')
const axios = require('axios') // cliente http para node y para el browser

const cookieParser = require('cookie-parser') // parsea cookies del req y las pone en req.cookies --> middleware function
const jsonBodyParser = express.json(); // ... const body = JSON.parse(json) -> req.body = body. --> middleware function

(async () => {

    await mongoose.connect('mongodb://localhost:27017/postits') // si tiene resolucion negativa, lanza un error y se va

    console.log('db connected')

    api.use(cookieParser())
    api.use(jsonBodyParser)

    /* Homepage with country guessing and cookie processing  */

    let countryCode

    api.get('/', (req, res) => {
        // const ip = req.ip // to implement
        const ipSpain = '81.43.200.106'
        const ipMexico = '131.72.228.24'

        let randomIp = '' // tengo q asignarle un string vacio para despues llenarlo con strings
        for (let i = 0; i < 4; i++) {
            randomIp += Math.floor(Math.random() * 255) + 1
            if (i < 3) randomIp += '.'
        }
        
        const cookie = req.cookies // devuelve un objeto q puede estar vacio

        if (!Object.hasOwn(cookie, 'country')) {
            axios.get(`https://ipwho.is/${randomIp}`)
                .then(response => {
                    const { data: { country_code: resCountryCode } } = response
                    countryCode = resCountryCode.toLowerCase() // me tira error aqui cuando la api no procesa bien la ip
                    console.log(randomIp, countryCode)
                    res.cookie('country', countryCode, {maxAge: 5000}) // 5 segundos
                    res.status(200).send(`cookie set with country: ${countryCode}`)
                })
                .catch(error => res.status(500).json({ error: error.message }))
        } else {
            countryCode = cookie.country
            res.status(200).send(`cookie found with country: ${countryCode}`)
        }
    })

    /* User registration */

    api.post('/api/users', (req, res) => {
        try {
            const { body: { name, email, password } } = req

            validateText(name, 'name')
            validateEmail(email)
            validatePassword(password)

            registerUser(name, email, password)
                .then(() => res.status(201).send())
                .catch(error => {
                    if (error instanceof DuplicityError) { 
                        res.status(409).json({ error: error.message })
                    } else if (error instanceof Error) {
                        res.status(500).json({ error: error.message })
                    }
                    return
                })
        } catch (error) {
            if (error instanceof FormatError || error instanceof TypeError)
                res.status(400).json({ error: error.message })
            else
                res.status(500).json({ error: error.message })
        }
    })

    /* User authentication */

    api.post('/api/users/auth', (req, res) => {
        try {
            const { body: { email, password } } = req

            validateEmail(email)
            validatePassword(password)

            authenticateUser(email, password, (error, token) => {
                if (error) {
                    if (error instanceof CredentialsError)
                        res.status(401).json({ error: error.message })
                    else
                        res.status(500).json({ error: error.message })

                    return
                }

                res.status(200).json({ token })
            })

        } catch (error) {
            if (error instanceof FormatError || error instanceof TypeError)
                res.status(400).json({ error: error.message })
            else
                res.status(500).json({ error: error.message })
        }
    })

    api.listen(8080, () => console.log('api started'))

    // SIGINT - señal de interrupcion
    process.on('SIGINT', async () => { // similar a eventListener pero de node. SIGINT = CTRL+C
        await mongoose.disconnect()

        console.log('db disconnected')

        console.log('api stopped')

        process.exit(0) // para q pare el server, porque ahora yo he tomado el control de CTRL+C
    })

})();





