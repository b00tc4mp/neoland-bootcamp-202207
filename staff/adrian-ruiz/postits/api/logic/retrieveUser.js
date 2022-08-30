const { User } = require('../models/index')
const {Types: {ObjectId}} = require('mongoose')
const { NotFoundError, FormatError } = require('errors')

async function retrieveUser(userId) {
//TODO VALIDATE userID MONGO

if(!(ObjectId.isValid(userId))) throw new FormatError('User is not valid')

    const foundUser = await User.findById(userId) //TODO: Si utilizamos LEAN la query de mongoose será más rapida

    if (!foundUser) throw new NotFoundError('User not found')

    return { name: foundUser.name, email: foundUser.email, notes: foundUser.notes }
    
}

module.exports = retrieveUser