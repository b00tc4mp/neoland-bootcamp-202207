const { connect, disconnect } = require('mongoose')
const express = require('express')
const { registerUser, authenticateUser } = require('./logic')
const { DuplicityError, AuthError, SystemError, FormatError } = require('./errors');


(async () => {
    await connect('mongodb://127.0.0.1:27017/postits')

    console.log('db connected')

    const api = express()

    const jsonBodyParser = express.json() // ... const body = JSON.parse(json) -> req.body = body

    api.post('/api/users', jsonBodyParser, async (req, res) => {
        try {

            const { body: { name, email, password } } = req

            await registerUser(name, email, password)

            res.status(201).send()

        } catch (error) {
            if (error instanceof DuplicityError)
                res.status(409).json({ error: error.message })
            else if (error instanceof TypeError || error instanceof FormatError)
                res.status(400).json({ error: error.message })
            else res.status(500).json({ error: error.message })
        }
    })

    api.post('/api/users/auth', jsonBodyParser, async (req, res) => {
        try {
            const { body: { email, password } } = req

            const token = await authenticateUser(email, password)

            res.status(200).send({token: token})

        } catch (error) {
            if (error instanceof AuthError)
                res.status(401).json({ error: error.message })
            if (error instanceof TypeError || error instanceof FormatError)
                res.status(400).json({ error: error.message })
            else
                res.status(500).json({ error: error.message })
        }
    })

    api.listen(8080, () => console.log('api started'))

    process.on('SIGINT', async () => {
        if (!process.stopped) {
            process.stopped = true

            console.log('api stopped')

            await disconnect()
            console.log('db disconnected')
            process.exit(0)

        }
    })
})()