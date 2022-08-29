const { validatePassword, validateEmail} = require('validators')
const { AuthError, NotFoundError } = require('errors')
const { User } = require('../models/index')


async function authenticateUser(email, password) {
    
    //TODO validate inputs
    validatePassword(password)
    validateEmail(email)

        const foundUser = await User.findOne({
            'email': email
        })

        if(!foundUser) throw new NotFoundError('Email and/or password wrong')

        if(foundUser.password !== password) throw new AuthError('Email and/or password wrong')
        
        return foundUser.id
}

module.exports = authenticateUser
