const express = require('express')
const { writeFile } = require('fs')

const api = express()

const jsonBodyParser = express.json() // ... const body = JSON.parse(json) -> req.body = body

api.post('/api/users', jsonBodyParser, (req, res) => {
    //const body = req.body
    //const { name, email, password } = body
    const { body: { name, email, password } } = req

    // TODO check if user (email) already exists!

    const user = {
        id: `user-${Math.round(Math.random() * Date.now())}`,
        name,
        email,
        password
    }
    const json = JSON.stringify(user)

    writeFile(`./data/users/${user.id}.json`, json, 'utf8', error => {
        if (error) {
            res.status(500).json({ error: error.message })

            return
        }

        res.status(201).send()
    })
})

api.listen(8080, () => console.log('api started'))