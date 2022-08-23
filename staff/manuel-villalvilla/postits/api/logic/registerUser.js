const { readFile, writeFile, readdir } = require('fs')
const DuplicityError = require('../errors/DuplicityError')

module.exports = function registerUser(name, email, password, callback) { // uso un callback pq es una funcion asincrona
    // TODO validate inputs

    try {
        readdir('./data/users', (error, files) => {
            try {
                if (error) {
                    callback(error)

                    return
                }

                if (files.length === 0) {
                    const newUser = {
                        id: `user-${Math.round(Math.random() * Date.now())}`,
                        name,
                        email,
                        password
                    }

                    const newJSON = JSON.stringify(newUser)

                    writeFile(`./data/users/${newUser.id}.json`, newJSON, 'utf8', error => {
                        if (error) {
                            callback(error)

                            return
                        }

                        callback(null)
                    })

                    return
                }

                let index = 0
                let file = files[index];

                (function iterate() {
                    readFile(`./data/users/${file}`, 'utf8', (error, json) => {
                        if (error) {
                            callback(error)

                            return
                        }

                        const user = JSON.parse(json)

                        if (user.email === email) {
                            callback(new DuplicityError(`user with email ${email} already exists`))

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
                            name,
                            email,
                            password
                        }

                        const newJSON = JSON.stringify(newUser)

                        writeFile(`./data/users/${newUser.id}.json`, newJSON, 'utf8', error => {
                            if (error) {
                                callback(error)

                                return
                            }

                            callback(null)
                        })
                    })
                })() //iife
            } catch(error) {
                callback(error)
            }
        })
    } catch(error) {
        callback(error)
    }
}