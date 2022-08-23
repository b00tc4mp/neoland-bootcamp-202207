const express = require('express')
const {readdir, readFile } = require('fs')
const DuplicityError = require('./errors/DuplicityError')
const RegexError = require('./errors/RegexError')
const jwt = require('jsonwebtoken')
const registerUser = require('./logic/registerUser')

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

    const { body: { email, password } } = req

    readdir('./data/users', (error, files) => {
        if (error) {
            res.status(500).json({ error: error.message })

            return
        }
        // TODO VALIDATION IF DATABASE IS EMPTY (UNDEFINED RETURNS ERROR)
        let index = 0
        let file = files[index];

        (function iterate() {
            readFile(`./data/users/${file}`, 'utf8', (error, json) => {
                if (error) {
                    res.status(500).json({ error: error.message })

                    return
                }

                const user = JSON.parse(json)

                if (user.email === email && user.password === password) {
                    const token = jwt.sign(user, 'secret')
                    res.status(200).json({ userId: user.id, name: user.name, email: user.email, token: token })
                    return
                }

                index++
                if (index < files.length) {
                    file = files[index]

                    iterate()

                    return
                }

                res.status(401).json('Username and/or password wrong')

            })

        })() // iife
    })
})

api.listen(8080, () => { console.log('api started') })



