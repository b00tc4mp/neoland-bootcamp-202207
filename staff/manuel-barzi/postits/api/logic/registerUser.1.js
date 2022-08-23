const { writeFile, readdir, readFile } = require('fs')

function registerUser(name, email, password, callback) {
    // TODO validate inputs

    try {
        readdir('./data/users', (error, files) => {
            try {
                if (error) {
                    callback(error)

                    return
                }

                if (files.length) {
                    let index = 0
                    let file = files[index];

                    (function iterate() {
                        readFile(`./data/users/${file}`, 'utf8', (error, json) => {
                            try {
                                if (error) {
                                    callback(error)

                                    return
                                }

                                const user = JSON.parse(json)

                                if (user.email === email) {
                                    callback(new Error(`user with email ${email} already exists`))

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

                                const newJson = JSON.stringify(newUser)

                                writeFile(`./data/users/${newUser.id}.json`, newJson, 'utf8', error => {
                                    if (error) {
                                        callback(error)

                                        return
                                    }

                                    callback(null)
                                })
                            } catch (error) {
                                callback(error)
                            }
                        })
                    })() // iife

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
                        callback(error)

                        return
                    }

                    callback(null)
                })
            } catch (error) {
                callback(error)
            }
        })
    } catch (error) {
        callback(error)
    }
}

module.exports = registerUser