const { connect, disconnect } = require('mongoose')
const express = require('express')
const { DuplicityError, AuthError, NotFoundError, FormatError, SystemError } = require('./errors')
const { registerUser, authenticateUser, retrieveUser } = require('./logic')
const logger = require('./logger')(module)
// (module) palabra reservada que se refiere al fichero del modulo exportado
const { sign, verify, JsonWebTokenError, TokenExpiredError, NotBeforeError } = require('jsonwebtoken')
// TOKEN se guarda la id usuario //descargas npm i jsonwebtoken // librería de token// jwt.io-->página token

connect('mongodb://localhost:27017/postits')
    .then(() => {
        logger.info('db connected')

        const api = express()

        const jsonBodyParser = express.json()

        api.post('/api/users', jsonBodyParser, (req, res) => {
            try {
                const { body: { name, email, password } } = req

                registerUser(name, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        if (error instanceof DuplicityError)
                            res.status(409).json({ error: error.message })
                        else
                            res.status(500).json({ error: 'system error' })

                        logger.error(error)

                        return
                    })
            } catch (error) {
                if (error instanceof TypeError || error instanceof FormatError)
                    res.status(400).json({ error: error.message })
                else
                    res.status(500).json({ error: 'system error' })

                logger.error(error)
            }
        })

        api.post('/api/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { body: { email, password } } = req

                authenticateUser(email, password)
                    .then(userId => {
                        const token = sign({ sub: userId }, 'Dan: copié el código de Mónica!', { expiresIn: '1h' })
                        //tres partes tiene el token userId, secreto y expiración, aquí el secreto
                        
                        res.json({ token })
                    })
                    .catch(error => {
                        if (error instanceof NotFoundError || error instanceof AuthError)
                            res.status(401).json({ error: 'wrong credentials' })
                        else
                            res.status(500).json({ error: 'system error' })

                        logger.error(error)

                        return
                    })
            } catch (error) {
                if (error instanceof TypeError || error instanceof FormatError)
                    res.status(400).json({ error: error.message })
                else
                    res.status(500).json({ error: 'system error' })

                logger.error(error)
            }
        })

        api.get('/api/users', (req, res) => {
            try {
                const { headers: { authorization } } = req

                const token = authorization.substring(7)
                // espacios de palabra bearer+espacio-->esto siempre es fijo por eso el substring(7) seimpre será el mismo


                const payload = verify(token, 'Dan: copié el código de Mónica!')
                //el mismo secreto que se utilizó para crear el token

                const { sub: userId } = payload
                //esto me interesa porque con el sub recupero el usuario

                retrieveUser(userId)
                    .then(user => res.json(user))
                    .catch(error => {
                        if (error instanceof NotFoundError || error instanceof AuthError)
                            res.status(401).json({ error: 'wrong credentials' })
                        else
                            res.status(500).json({ error: 'system error' })

                        logger.error(error)

                        return
                    })
            } catch (error) {
                if (error instanceof TypeError || error instanceof FormatError)
                    res.status(400).json({ error: error.message })
                else if(error instanceof JsonWebTokenError || error instanceof TokenExpiredError || error instanceof NotBeforeError)
                //errores de token
                    res.status(401).json({ error: 'token not valid'})
                else
                    res.status(500).json({ error: 'system error' })

                logger.error(error)
            }
        })

        api.listen(8080, () => logger.info('api started'))

        process.on('SIGINT', () => {
            if (!process.stopped) {
                process.stopped = true

                logger.info('\napi stopped')

                disconnect()
                    .then(() => {
                        logger.info('db disconnected')

                        process.exit(0)
                    })
            }
        })
    })
    .catch(error => {
        logger.error(error)
    })