const { User } = require('../models')
const { DuplicityError, SystemError } = require('../errors')
const { validateEmail, validateObjectId } = require('../validators')

module.exports = function (userId, newEmail) {
    validateObjectId(userId)
    validateEmail(newEmail)

    return User.updateOne({ _id: userId }, { $set: { email: newEmail }})
        .then(() => {})
        .catch(error => {
            if (error.code === 11000) throw new DuplicityError(`user with email ${newEmail} already exists`)
            throw new SystemError(error.message)
        })
}
