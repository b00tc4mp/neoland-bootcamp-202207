const express = require('express')
const api = express()
const { authenticateUser, registerUser } = require('./logic')
const { CredentialsError, DuplicityError, FormatError } = require('./errors')
const { validateText, validateEmail, validatePassword } = require('./validators')

const jsonBodyParser = express.json() // ... const body = JSON.parse(json) -> req.body = body

/* User registration */

api.post('/api/users', jsonBodyParser, (req, res) => {
    
    try {
        const { body: { name, email, password } } = req

        validateText(name, 'name')
        validateEmail(email)
        validatePassword(password)

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
        if (error instanceof FormatError || error instanceof TypeError)
            res.status(400).json({ error: error.message })
        else
            res.status(500).json({ error: error.message })
    }
})

/* User authentication */

api.post('/api/users/auth', jsonBodyParser, (req, res) => {
    try {
        const { body: { email, password } } = req

        validateEmail(email)
        validatePassword(password)

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
        if (error instanceof FormatError || error instanceof TypeError)
            res.status(400).json({ error: error.message })
        else
            res.status(500).json({ error: error.message })
    }
})

api.listen(8080, () => console.log('api started'))