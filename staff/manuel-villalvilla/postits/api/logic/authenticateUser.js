const { readFile, readdir } = require('fs')
const CredentialsError = require('../errors/CredentialsError')

module.exports = function authenticateUser(email, password, callback) {
    try {
        readdir('./data/users/', (error, files) => {
            if (error) {
                callback(error, null)
    
                return
            }
    
            if (files.length === 0) {
                callback(new CredentialsError('email or password incorrect'), null)
    
                return
            }
    
            let index = 0
            let file = files[index];
    
            (function iterate() {
                readFile(`./data/users/${file}`, 'utf8', (error, json) => {
                    if (error) {
                        callback(error, null)
    
                        return
                    }
    
                    const user = JSON.parse(json)
    
                    if (user.email === email) {
                        if (user.password === password) {
                            callback(null, user.id)
    
                            return
                        } else {
                            callback(new CredentialsError('email or password incorrect'), null)

                            return
                        }
                    } 
    
                    index++
    
                    if (index < files.length) {
                        file = files[index]
                        iterate()
                    } 
                    else 
                        callback(new CredentialsError('email or password incorrect'), null)

                })
            })()
        })
    } catch (error) {
        callback(error, null)
    }
}