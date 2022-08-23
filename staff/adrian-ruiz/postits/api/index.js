const express = require('express')
const { writeFile, readdir, readFile } = require('fs')
const jwt = require('jsonwebtoken')

const api = express()

const jsonBodyParser = express.json()

api.post('/api/users', jsonBodyParser, (req, res) => {

    const { body: { name, email, password } } = req

    readdir('./data/users', (error, files) => {
        if (error) {
            res.status(500).json({ error: error.message })

            return
        }

        if (files.length === 0) {
            writeUser({ name, email, password }, (error) => {
                if (error) {
                    res.status(500).json({ error: error.message });
                }

                res.status(201).send();
            })
        } else {

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
                        res.status(409).json(`User with email ${email} already exists`)

                        return
                    }

                    index++
                    if (index < files.length) {
                        file = files[index]

                        iterate()

                        return
                    }

                    writeNewUserOnFile({ name, email, password }, (error) => {
                        if (error) {
                            res.status(500).json({ error: error.message });
                        }

                        res.status(201).send();
                    })
                })

            })() // iife
        }

    })
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

function writeUser({ name, email, password }, callback) {
    const newUser = {
        id: `user-${Date.now()}`,
        name,
        email,
        password,
    };

    const newJson = JSON.stringify(newUser);

    writeFile(`./data/users/${newUser.id}.json`, newJson, "utf8", (error) => {
        if (error) {
            callback(error);
            return;
        }

        callback(null);
    });
}

