const { validatePassword, validateEmail, validateCallback } = require('validators')
const { AuthError, UnknownError } = require('errors')
const User = require('../models/user')

async function authenticateUser(email, password, callback) {
    //TODO validate inputs
    validatePassword(password)
    validateEmail(email)
    validateCallback(callback)
    
    try{
        const found = await User.findOne({
            'email': email,
            'password': password
        })

        if(found) return callback(null, found.id) 
        
        callback(new AuthError('Email and/or password wrong'))
    }catch(error){
        callback(new UnknownError(error.message))
    }
}

module.exports = authenticateUser
