const { readdir, readFile } = require('fs')
const { SystemError, AuthError } = require('../errors')
const {validateCallback, validateEmail, validatePassword} = require('../validators')

function authenticateUser(email, password, callback) {
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    const folder = './data/users'

    readdir(folder, (error, files) => {
        if (error) return callback(new SystemError(`cannot list files from folder ${folder}`))

        files = files.filter(file => !file.startsWith('.')) //para que se suba la carpeta users

        if (files.length) {
            let index = 0
            let file = files[index];

            (function iterate() {
                readFile(`${folder}/${file}`, 'utf8', (error, json) => {

                    if (error) return callback(new SystemError(`cannot read file ${file} from folder ${folder}`))

                    const user = JSON.parse(json)

                    if (user.email === email)
                        if (user.password === password) return callback(null, user.id)

                        else return callback(new AuthError('wrong credentials'))

                    index++

                    if (index < files.length) {
                        file = files[index]

                        iterate()

                        return
                    }

                    callback(new AuthError('wrong credentials'))
                })
            })()

            return
        }
        callback(new AuthError('wrong credentials'))
    })
}

module.exports = authenticateUser