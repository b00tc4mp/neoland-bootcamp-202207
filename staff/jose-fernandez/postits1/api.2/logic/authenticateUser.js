const { readdir, readFile } = require('fs')
const { SystemError,AuthError } = require('../errors')
const { validateEmail, validatePassword, validateCallback } = require('../validators')

function authenticateUser(email, password, callback) {
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)
    const folder = './data/users'
    readdir(folder, (error, files) => {
        if (error) return callback(new SystemError(`cannot list files from folder ${folder}`))

        files = files.filter(file => !file.startsWith('.'))
        if (files.length) {
            let index = 0
            let file = files[index];

            (function iterate() {
                readFile(`${folder}/${file}`, 'utf8', (error, json) => {

                    if (error) return callback(new SystemError(`cannot read file ${file} in folder ${folder}`))

                    const user = JSON.parse(json)

                    if (user.email === email) {
                        if (user.password === password) return callback(null, user.id)
                            // res.status(200).send(`user with email ${email} and userId ${user.id}`)

                        
                        else return callback(new AuthError(`email or password wrongs credentials`))
                            // res.status(401).json({ error: `email or password wrongs credentials` })
                    }

                    index++

                    if (index < files.length) {
                        file = files[index]

                        iterate()

                        return
                    }
                    callback(new AuthError(`wrong credentials`))
                    // res.status(401).json({ error: `email or password wrongs credentials` })


                })

            })() //iife
            return
        }
        callback(new AuthError(`wrong credentials`))
        // res.status(401).json({ error: `wrongs credentials` })

    })

}

module.exports = authenticateUser