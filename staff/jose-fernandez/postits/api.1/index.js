const express = require('express')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const { DuplicityError, AuthError } = require('./errors')

const api = express()

const jsonBodyParser = express.json()
api.post('/api/users', jsonBodyParser, (req, res) => {
    try {
        const { body: { name, email, password } } = req

        // TODO check if user (email) already exists!

        registerUser(name, email, password, error => {
            if (error) {
                if (error instanceof DuplicityError)
                    res.status(409).json({ error: error.message })
                else
                    res.status(409).json({ error: error.message })

                return

            }
            res.status(201).send()
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

api.post('/api/users/auth', jsonBodyParser, (req, res) => {
    try {
        const { body: { email, password } } = req
        authenticateUser(email, password, error => {
            if (error) {
                if (error instanceof AuthError)
                    res.status(401).json({ error: error.message })
                else
                    res.status(500).json({ error: error.message })

                return

            }
            res.status(200).send()
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

api.listen(8080, () => console.log('api started'))