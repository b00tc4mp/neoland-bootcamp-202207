const express = require('express')
const DuplicityError = require('./errors/DuplicityError')
const RegexError = require('./errors/RegexError')
const AuthError = require('./errors/AuthError')
const jwt = require('jsonwebtoken')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')

const api = express()

const jsonBodyParser = express.json()

api.post('/api/users', jsonBodyParser, (req, res) => {
    try {

        const { body: { name, email, password } } = req

        registerUser(name, email, password, error => {
            debugger
            if (error) {
                if (error instanceof DuplicityError)
                    res.status(409).json({ error: error.message })
                else if(error instanceof RegexError)
                    res.status(400).json({error: error.message})
                else
                    res.status(500).json({ error: error.message })

                return
            }

            res.status(201).send()
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

})

api.post('/api/users/auth', jsonBodyParser, (req, res) => {
    try{
        const { body: { email, password } } = req

        authenticateUser(email, password, error => {
            if(error){
                if(error instanceof RegexError){
                    res.status(400).json({error: error.message})
                }
                else if(error instanceof AuthError)
                    res.status(401).json({error: error.message})
                else
                res.status(500).json({ error: error.message })

                return
            }
            // Should token use all data from user instead of only email?
            const token = jwt.sign(email, 'secret')
            res.status(200).json({token: token})
        })
    }catch(error){
        res.status(500).json({error: error.message})
    }
})

api.listen(8080, () => { console.log('api started') })



