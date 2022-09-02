const { connect, disconnect } = require('mongoose')
const express = require('express')
const { DuplicityError, NotFoundError, AuthError } = require('./errors')
const {
    registerUser,
    authenticateUser,
    retrieveUser,
    createNote
} = require('./logic')
const { sign } = require('jsonwebtoken')
const { verifyToken, createLogger, runWithErrorHandling } = require('./utils')
const logger = createLogger(module)

connect('mongodb://localhost:27017/postits')
    .then(() => {
        logger.info('db connected')

        const api = express()
        const { Router } = express

        const jsonBodyParser = express.json()

        const usersRouter = Router()

        usersRouter.post('/users', jsonBodyParser, (req, res) => {
            runWithErrorHandling(() => {
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
            }, res)
        })

        usersRouter.post('/users/auth', jsonBodyParser, (req, res) => {
            runWithErrorHandling(() => {
                const { body: { email, password } } = req

                authenticateUser(email, password)
                    .then(userId => {
                        const token = sign({ sub: userId }, 'Dan: copié el código de Mónica!', { expiresIn: '1h' })

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
            }, res)
        })

        usersRouter.get('/users', (req, res) => {
            runWithErrorHandling(() => {
                const userId = verifyToken(req)

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
            }, res)
        })

        const notesRouter = Router()

        notesRouter.post('/notes', jsonBodyParser, (req, res) => {
            runWithErrorHandling(() => {
                const userId = verifyToken(req)

                const { body: { text } } = req

                createNote(userId, text)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        if (error instanceof NotFoundError)
                            res.status(404).json({ error: error.message })
                        else
                            res.status(500).json({ error: 'system error' })

                        logger.error(error)

                        return
                    })
            }, res)
        })

        api.use('/api', usersRouter, notesRouter)

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