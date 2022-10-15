const { writeFile, readdir, readFile } = require('fs')
const DuplicityError = require('../errors/DuplicityError')
const SystemError = require('../errors/SystemError')
const UnknownError = require('../errors/UnknownError')
// está con los errores --> ver folder error

function registerUser(name, email, password, callback) {
    // TODO validate inputs

    const folder = './data/users'

    readdir(folder, (error, files) => {
        files = files.filter(file => !file.startsWith('.'))

        if (error) return callback(new SystemError(`cannot list files from folder ${folder}`))

        if (files.length) {
            let index = 0
            let file = files[index];

            (function iterate() {
                readFile(`${folder}/${file}`, 'utf8', (error, json) => {
                    if (error) return callback(new SystemError(`cannot read file ${file} in folder ${folder}`))

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

                    const newJson = JSON.stringify(newUser)

                    writeFile(`${folder}/${newUser.id}.json`, newJson, 'utf8', error => {
                        if (error) return callback(new SystemError(`cannot write file ${newUser.id}.json in folder ${folder}`))

                        callback(null)
                    })
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
            if (error) return callback(new SystemError(`cannot write file ${newUser.id}.json in folder ${folder}`))

            callback(null)
        })
    })
}

module.exports = registerUser