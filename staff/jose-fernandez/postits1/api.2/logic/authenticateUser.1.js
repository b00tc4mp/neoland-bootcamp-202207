const express = require('express')
const { readdir, readFile } = require('fs')

const api = express()
// ... const body = JSON.parse(json) -> req.body = body
const jsonBodyParser = express.json()

api.post('/api/users/auth', jsonBodyParser, (req, res) => {
    //TODO implement me
    //send back the user id in a json {userId: user.id}
    try {
        const { body: { email, password } } = req
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
                            try {
                                if (error) {
                                    res.status(500).json({ error: error.message })
                                    return
                                }

                                const user = JSON.parse(json)

                                if (user.email === email) {
                                    if (user.password === password) {
                                        res.status(200).send(`user with email ${email} and userId ${user.id}`)
                                        // res.status(409).json({ error: `user or password credentials wrongs` })
                                        return
                                    } else {
                                        res.status(401).json({ error: `email or password wrongs credentials` })
                                        return
                                    }

                                }

                                index++

                                if (index < files.length) {
                                    file = files[index]

                                    iterate()

                                    return
                                }
                                res.status(401).json({ error: `email or password wrongs credentials` })
                                // res.status(200).send(`user with email ${email} and userId ${user.id}`)
                            }catch(error){
                                res.status(500).json({ error: error.message })
                            }
                        })

                    })()
                    return
                }
                res.status(401).json({ error: `wrongs credentials` })
            } catch (error) {
                res.status(401).json({ error: `wrongs credentials` })
            }

        })
    } catch (error) {
        res.status(401).json({ error: `wrongs credentials` })
    }
})
api.listen(8080, () => console.log('api started'))

