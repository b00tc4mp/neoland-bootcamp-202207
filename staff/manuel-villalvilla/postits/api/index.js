const express = require('express')
const api = express()
const registerUser = require('./logic/registerUser')
const DuplicityError = require('./errors/DuplicityError')
const CredentialsError = require('./errors/CredentialsError')
const authenticateUser = require('./logic/authenticateUser')

const jsonBodyParser = express.json() // ... const body = JSON.parse(json) -> req.body = body

/* User registration */

api.post('/api/users', jsonBodyParser, (req, res) => {
    try {
        const { body: { name, email, password } } = req

        registerUser(name, email, password, error => {
            if (error) {
                if (error instanceof DuplicityError)
                    res.status(409).json({ error: error.message })
                else
                    res.status(500).json({ error: error.message })

                return
            }

            res.status(201).send()
        })
    } catch(error) {
        res.status(500).json({ error: error.message })
    }
})

/* User authentication */

api.post('/api/users/auth', jsonBodyParser, (req, res) => {
    try {
        const { body: { email, password } } = req

        authenticateUser(email, password, (error, userId) => {
            if (error) {
                if (error instanceof CredentialsError) 
                    res.status(401).json({ error: error.message })
                else
                    res.status(500).json({ error: error.message })

                return
            }

            res.status(200).json({ userId })
        })
    } catch(error) {
        res.status(500).json({ error: error.message })
    }
})

api.listen(8080, () => console.log('api started'))