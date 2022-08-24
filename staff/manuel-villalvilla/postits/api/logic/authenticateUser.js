const { readFile } = require('fs')
const { readFolder } = require('../utils')
const { CredentialsError } = require('../errors')
const { validateCallback } = require('../validators')

module.exports = function authenticateUser(email, password, callback) {
    validateCallback(callback)

    const usersFolder = './data/users'

    readFolder(usersFolder, (error, files) => {
        if (error) return callback(error)

        if (files.length === 0) return callback(new CredentialsError('email or password incorrect'))

        let index = 0
        let file = files[index];

        (function iterate() {
            readFile(`${usersFolder}/${file}`, 'utf8', (error, json) => {
                if (error) return callback(error)

                const user = JSON.parse(json)

                if (user.email === email) {
                    if (user.password === password) {
                        callback(null, user.id)

                        return
                    } else {
                        callback(new CredentialsError('email or password incorrect'))

                        return
                    }
                }

                index++

                if (index < files.length) {
                    file = files[index]
                    iterate()
                }
                else
                    callback(new CredentialsError('email or password incorrect'))

            })
        })() // iife
    })
}