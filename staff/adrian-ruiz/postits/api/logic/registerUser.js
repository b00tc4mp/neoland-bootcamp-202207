const { UnknownError, DuplicityError } = require('errors')
const { validateName, validatePassword, validateEmail, validateCallback } = require('validators')
const User  = require('../models/user')


async function registerUser(name, email, password, callback) {
    //TODO validate inputs
    validateName(name)
    validatePassword(password)
    validateEmail(email)
    validateCallback(callback)
    try{
        
        const found = await User.findOne({'email': email})

        if(found) return callback(new DuplicityError(`User with email ${email} already exists`))
    
        await User.create({name, email, password})

        callback(null)

    }catch(error){
        callback(new UnknownError(error.message))
    }
    
}
module.exports = registerUser