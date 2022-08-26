const { validatePassword, validateEmail} = require('validators')
const { AuthError, UnknownError } = require('errors')
const User = require('../models/user')

async function authenticateUser(email, password) {
    
    //TODO validate inputs
    validatePassword(password)
    validateEmail(email)

        const found = await User.findOne({
            'email': email,
            'password': password
        })

        if(found) return found._id
        
        throw new AuthError('Email and/or password wrong')
}

module.exports = authenticateUser
