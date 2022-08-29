const { CredentialsError, SystemError, NotFoundError } = require("../errors")
const { Users } = require("../models")
const { validateObjectId, validatePassword } = require("../validators")

module.exports = function (userId, oldPassword, newPassword) {
    debugger
    validateObjectId(userId)
    validatePassword(oldPassword)
    validatePassword(newPassword)

    return Users.findById(userId)
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (user.password !== oldPassword) throw new CredentialsError('wrong password')
            user.password = newPassword
            return user.save()
        })
        
}