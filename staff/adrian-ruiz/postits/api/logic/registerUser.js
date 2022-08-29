const { UnknownError, DuplicityError } = require('errors')
const { validateName, validatePassword, validateEmail} = require('validators')
const { User }  = require('../models/index')


async function registerUser(name, email, password) {
    //TODO validate inputs
    validateName(name)
    validatePassword(password)
    validateEmail(email)
        
        const found = await User.findOne({'email': email})

        if(found) throw new DuplicityError(`User with email ${email} already exists`)
    
        await User.create({name, email, password})

        return
    
}
module.exports = registerUser