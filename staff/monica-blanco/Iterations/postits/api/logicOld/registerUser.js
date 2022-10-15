const { writeFile, readdir, readFile } = require('fs')
const DuplicityError = require('../errors/DuplicityError')
const SystemError = require('../errors/SystemError')
const UnknownError = require('../errors/UnknownError')

function registerUser(name, email, password, callback) {

    const folder = './data/users'

    try {
        readdir(folder, (error, files) => {
            try {
                if (error) {
                    callback(new SystemError(`cannot list files from folder ${folder}`))

                    return
                }

                if (files.length) {
                    let index = 0
                    let file = files[index];

                    (function iterate() {
                        readFile(`${folder}/${file}`, 'utf8', (error, json) => {
                            try {
                                if (error) {
                                    callback(new SystemError(`cannot read file ${file} in folder ${folder}`))

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

                                const newJson = JSON.stringify(newUser)

                                writeFile(`${folder}/${newUser.id}.json`, newJson, 'utf8', error => {
                                    if (error) {
                                        callback(new SystemError(`cannot write file ${newUser.id}.json in folder ${folder}`))

                                        return
                                    }

                                    callback(null)
                                })
                            } catch (error) {
                                callback(new UnknownError(error.message))
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

                writeFile(`${folder}/${newUser.id}.json`, newJson, 'utf8', error => {
                    if (error) {
                        callback(new SystemError(`cannot write file ${newUser.id}.json in folder ${folder}`))

                        return
                    }

                    callback(null)
                })
            } catch (error) {
                callback(new UnknownError(error.message))
            }
        })
    } catch (error) {
        callback(new UnknownError(error.message))
    }
}

module.exports = registerUser