const { User } = require('../../models')
const { DuplicityError, SystemError } = require('errors')
const { validateEmail, validateObjectId } = require('validators')

/**
 * Updates user's email.
 * 
 * @param {string} userId The user's id.
 * @param {string} newEmail The user's desired new email.
 *  
 * @returns {Promise}
 * 
 * @throws {SystemError} If an error happens in db.
 * @throws {DuplicityError} If the user's email already exists in db.
 * @throws {FormatError} If userId | newEmail are not valid.
 * @throws {TypeError} If password is not a string.
 */

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
