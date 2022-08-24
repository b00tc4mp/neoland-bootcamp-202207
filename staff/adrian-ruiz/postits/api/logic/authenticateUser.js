const { readdir, readFile } = require('fs')
const { validatePassword, validateEmail, validateCallback } = require('validators')
const { AuthError, SystemError, UnknownError } = require('errors')

function authenticateUser(email, password, callback) {
    //TODO validate inputs
    validatePassword(password)
    validateEmail(email)
    validateCallback(callback)

    const folder = './data/users'

    try {
        readdir(folder, (error, files) => {
            if (error) {
                callback(new SystemError(`Can't list files from folder: ${folder}`))
                return
            }

            files = files.filter(file => !file.startsWith('.'))

            if (files.length === 0) {
                callback(new AuthError('Email and/or password wrong'))
                return
            }

            try {
                let index = 0
                let file = files[index];

                (function iterate() {
                    readFile(`./data/users/${file}`, 'utf8', (error, json) => {
                        if (error) {
                            callback(new SystemError(`Can't read file: ${file} in folder: ${folder}`))
                            return
                        }

                        const user = JSON.parse(json)

                        if (user.email === email) {
                            if (user.password === password) {
                                callback(null, user.id) 
                                return
                            }
                            callback(new AuthError('Email and/or password wrong'))
                            return
                        }

                        index++
                        if (index < files.length) {
                            file = files[index]

                            iterate()

                            return
                        }

                        callback(new AuthError('Email and/or password wrong'))

                    })

                })()
            } catch (error) {
                callback(new UnknownError(error.message))
            }
        })

    } catch (error) {
        callback(new UnknownError(error.message))
    }
}

module.exports = authenticateUser
