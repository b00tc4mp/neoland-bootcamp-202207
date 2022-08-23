const { writeFile, readdir, readFile } = require('fs')
const DuplicityError = require('../errors/DuplicityError')
const SystemError = require('../errors/SystemError')
const UnknownError = require('../errors/UnknownError')
const RegexError = require('../errors/RegexError')
const { passRegexMatch } = require('validators')

function registerUser(name, email, password, callback) {
    //TODO validate inputs
    try {
        passRegexMatch(password, error => {
            if (error) {
                callback(new RegexError(error.message))
                return
            }

        const folder = './data/users'

        try {
            readdir(folder, (error, files) => {
                try {
                    if (error) {
                        debugger
                        callback(new SystemError(`Can't list files from folder: ${folder}`))

                        return
                    }

                    if (files.length) {
                        let index = 0
                        let file = files[index];

                        (function iterate() {
                            readFile(`./data/users/${file}`, 'utf8', (error, json) => {
                                try {
                                    if (error) {
                                        callback(new SystemError(`Can't read file: ${file} in folder: ${folder}`))

                                        return
                                    }

                                    const user = JSON.parse(json)

                                    if (user.email === email) {
                                        callback(new DuplicityError(`User with email ${email} already exists`))

                                        return
                                    }

                                    index++

                                    if (index < files.length) {
                                        file = files[index]

                                        iterate()

                                        return
                                    }

                                    const newUser = {
                                        id: `user-${Date.now()}`,
                                        name,
                                        email,
                                        password,
                                    }

                                    const newJson = JSON.stringify(newUser)

                                    writeFile(`${folder}/${newUser.id}.json`, newJson, "utf8", (error) => {
                                        if (error) {
                                            callback(new SystemError(`Can't write file ${newUser.id}.json in folder: ${folder}`))

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
                    // IF !LENGTH THEN DO THIS CODE
                    const newUser = {
                        id: `user-${Date.now()}`,
                        name,
                        email,
                        password,
                    }


                    const newJson = JSON.stringify(newUser)

                    writeFile(`${folder}/${newUser.id}.json`, newJson, "utf8", (error) => {
                        if (error) {
                            callback(new SystemError(`Can't write file ${newUser.id}.json in folder: ${folder}`))

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
    })
    }catch(error){
        callback(new UnknownError(error.message))
    }
}
module.exports = registerUser