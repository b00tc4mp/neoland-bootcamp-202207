const express = require('express')
const { writeFile, readdir, readFile } = require('fs')

const api = express()
// ... const body = JSON.parse(json) -> req.body = body
const jsonBodyParser = express.json()
api.post('/api/users', jsonBodyParser, (req, res) => {
    try {
        const { body: { name, lastName, email, password } } = req

        readdir('./data/users', (error, files) => {
            try {
                if (error) {
                    res.status(500).json({ error: error.message })
                    return
                }

                if (files.length) {
                    let index = 0
                    let file = files[index];

                    (function iterate() {
                        readFile(`./data/users/${file}`, 'utf8', (error, json) => {
                            try{
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
                        }catch(error){
                            res.status(500).json({ error: error.message })
                        }
                        })
                    })() //iife
                    return
                }
                const newUser = {
                    id: `user-${Math.round(Math.random() * Date.now())}`,
                    name,
                    email,
                    password
                }

                const newJson = JSON.stringify(newUser)

                writeFile(`./data/users/${newUser.id}.json`, newJson, 'utf8', error => {
                    if (error) {
                        res.status(500).json({ error: error.message })

                        return
                    }

                    res.status(201).send()
                })
            } catch (error) {
                res.status(500).json({ error: error.message })
            }
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})
