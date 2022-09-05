const { User } = require('../../../models')
const { validatePassword } = require('validators')
const { verifyObjectIdString } = require('../../../utils')
const { AuthError, NotFoundError, SystemError} = require('errors')


module.exports = function updateUserPassword(oldPassword, newPassword, newPasswordRepeat, userId) {

    validatePassword(oldPassword)
    validatePassword(newPassword)
    validatePassword(newPasswordRepeat)
    verifyObjectIdString(userId)

    return User.findById({ _id: `${userId}` })
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (user.password !== oldPassword) throw new AuthError('wrong Password')
            else if (newPassword !== newPasswordRepeat) throw new Error(' please enter same password')
           
            user.password = newPassword

            return user.save()

        })

        .then(() => { })

}