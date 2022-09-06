const { readFile, writeFile } = require('fs')
const { readFolder } = require('../utils')
const { DuplicityError } = require('errors')
const { validateCallback } = require('validators')

module.exports = function registerUser(name, email, password, callback) { // uso un callback pq es una funcion asincrona
    const usersFolder = './src/data/users'

    validateCallback(callback)

    readFolder(usersFolder, (error, files) => {
        if (error) return callback(error)

        if (files.length === 0) {
            const newUser = {
                id: `user-${Math.round(Math.random() * Date.now())}`,
                name,
                email,
                password
            }

            const newJSON = JSON.stringify(newUser)

            writeFile(`${usersFolder}/${newUser.id}.json`, newJSON, 'utf8', error => {
                if (error) return callback(error)

                callback(null)
            })

            return
        }

        let index = 0
        let file = files[index];

        (function iterate() {
            readFile(`${usersFolder}/${file}`, 'utf8', (error, json) => {
                if (error) return callback(error)

                const user = JSON.parse(json)

                if (user.email === email) return callback(new DuplicityError(`user with email ${email} already exists`))

                index++

                if (index < files.length) {
                    file = files[index]

                    iterate()

                    return
                }

                const newUser = {
                    id: `user-${Math.round(Math.random() * Date.now())}`,
                    name,
                    email,
                    password
                }

                const newJSON = JSON.stringify(newUser)

                writeFile(`${usersFolder}/${newUser.id}.json`, newJSON, 'utf8', error => {
                    if (error) return callback(error)

                    callback(null)
                })
            })
        })() //iife
    })
}