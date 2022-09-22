const { validateEmail } = require("validators")
const { FormatError, AuthError } = require('errors')
const { User } = require('../models')
const { Types: { ObjectId } } = require('mongoose')


function updateUserEmail(userId, newEmail){
    if(!(ObjectId.isValid(userId))) throw new FormatError('User is not valid');
    validateEmail(newEmail)
   

    return (async() => {
        
        const user = await User.findById(userId)

        if(!user) throw new AuthError(`User ${userId} does not exists or credentials are wrong`)

        user.email = newEmail

        await user.save()

        return
    })()
}

module.exports = updateUserEmail