const { User } = require('../models/index')
const {Types: {ObjectId}} = require('mongoose')
const { NotFoundError } = require('errors')

async function retrieveUser(userId) {
//TODO VALIDATE userID MONGO

if(!(ObjectId.isValid(userId))) throw new NotFoundError('User not found')

    const foundUser = await User.findOne({
        _id: userId
    })

    if (!foundUser) throw new NotFoundError('User not found')

    return { name: foundUser.name, email: foundUser.email, notes: foundUser.notes }

}

module.exports = retrieveUser