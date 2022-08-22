const express = require('express')
const { writeFile, readdir, readFile } = require('fs')

const api = express()
// ... const body = JSON.parse(json) -> req.body = body
const jsonBodyParser = express.json()

api.post('/api/users/auth', jsonBodyParser, (req, res) => {
    //TODO implement me
    //send back the user id in a json {userId: user.id}
debugger
    const { body: {  email,password } } = req
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

                if (user.email === email && user.password===password) {
                    res.status(200).send(`user with email ${email} and userId ${user.id}`)
                    // res.status(409).json({ error: `user or password credentials wrongs` })
                    return
                }

                index++

                if (index < files.length) {
                    file = files[index]

                    iterate()

                    return
                }
                res.status(409).json({ error: `user or password wrongs credentials` })
                // res.status(200).send(`user with email ${email} and userId ${user.id}`)
            })
            
        })()
    })
})
api.listen(8080, () => console.log('api started'))