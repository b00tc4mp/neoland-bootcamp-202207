const { connect, disconnect } = require('mongoose')
const express = require('express')
const { DuplicityError, AuthError, FormatError } = require('./errors')
const { registerUser } = require('./logic')

connect('mongodb://localhost:27017/postits')
    .then(() => {
        console.log('db connected')

        const api = express()

        const jsonBodyParser = express.json() // ... const body = JSON.parse(json) -> req.body = body

        api.post('/api/users', jsonBodyParser, (req, res) => {
            try {
                const { body: { name, email, password } } = req

                registerUser(name, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        if (error instanceof DuplicityError)
                            res.status(409).json({ error: error.message })
                        else
                            res.status(500).json({ error: error.message })

                        return
                    })
            } catch (error) {
                if (error instanceof TypeError || error instanceof FormatError)
                    res.status(400).json({ error: error.message })
                else
                    res.status(500).json({ error: error.message })
            }
        })

        api.listen(8080, () => console.log('api started'))

        process.on('SIGINT', () => {
            if (!process.stopped) {
                process.stopped = true

                console.log('\napi stopped')

                disconnect()
                    .then(() => {
                        console.log('db disconnected')

                        process.exit(0)
                    })
            }
        })
    })
    .catch(error => {
        console.error(error)
    })