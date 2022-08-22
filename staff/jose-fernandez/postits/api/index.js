const express = require('express')
const { writeFile, readdir, readFile } = require('fs')

const api = express()
// ... const body = JSON.parse(json) -> req.body = body
const jsonBodyParser = express.json()
api.post('/api/users', jsonBodyParser, (req, res) => {
    //const body = req.body
    //const { name, email, password } = body
    const { body: { name, lastName, email, password } } = req

    // TODO check if user (email) already exists!

    readdir('./data/users', (error, files) => {
        if (error) {
            res.status(500).json({ error: error.message })
            return
        }

        let index = 0
        let file = files[index];

        (function iterate() {
            readFile(`./data/users/${file}`, 'utf8', (error, json) => {
                if (error) {
                    res.status(500).json({ error: error.message })
                    return
                }

                const user = JSON.parse(json)

                if (user.email === email) {
                    res.status(409).json({ error: `user with email ${email} already exists` })
                    return
                }

                index++

                if (index < files.length) {
                    file = files[index]

                    iterate()

                    return
                }

                const newUser = {
                    id: `user-${Math.round(Math.random() * Date.now())}`,
                    name, lastName, email, password
                }

                const newJson = JSON.stringify(newUser)

                writeFile(`./data/users/${newUser.id}.json`, newJson, 'utf8', error => {
                    if (error) {
                        res.status(500).json({ error: error.message })
                        return
                    }

                    res.status(201).send()
                })
            })
        })() //iife
    })
})

api.listen(8080, () => console.log('api started'))