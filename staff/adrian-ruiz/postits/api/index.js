const express = require('express')
const mongoose = require('mongoose')
const { RegexError, AuthError, DuplicityError, FormatError } = require('errors')
const jwt = require('jsonwebtoken')
const authenticateUser = require('./logic/authenticateUser')
const registerUser = require('./logic/registerUser');


(async () => {

    await mongoose.connect('mongodb://localhost:27017/postits')

    console.log('Connected to db: mongodb://localhost:27017/postits')

    const api = express()

    const jsonBodyParser = express.json()

    api.post('/api/users', jsonBodyParser, async (req, res) => {
        try {

            const { body: { name, email, password } } = req

            await registerUser(name, email, password)

            res.status(201).send()

        } catch (error) {
            debugger
            if (error instanceof DuplicityError)
                res.status(409).json({ error: error.message })
            else if (error instanceof TypeError || error instanceof FormatError || error instanceof RegexError)
                res.status(400).json({ error: error.message })
            else res.status(500).json({ error: error.message })
        }
    })

    api.post('/api/users/auth', jsonBodyParser, async (req, res) => {
        try {

            const { body: { email, password } } = req

            const userId = await authenticateUser(email, password)

            const token = jwt.sign(userId, 'secret')

            res.status(200).json({ token: token })

        } catch (error) {
            if (error instanceof AuthError)
                res.status(401).json({ error: error.message })
            else if (error instanceof TypeError || error instanceof FormatError || error instanceof RegexError)
                res.status(400).json({ error: error.message })
            else res.status(500).json({ error: error.message })
        }
    })

    api.listen(8080, () => { console.log('api started') })

    process.on('SIGINT', async () => { // similar a eventListener pero de node. SIGINT = CTRL+C         
        await mongoose.disconnect()
        console.log('db disconnected')
        process.exit(0) // para q pare el server     
    })
})()


