const { User } = require('../../../models')
const { validateEmail, validatePassword } = require('../../../validators')
const { AuthError, NotFoundError, SystemError } = require('../../../errors')
/**
 * 
 * @param {string} email 
 * @param {string} password 
 * 
 * @throws {AuthError} 
 * @throws {FormatError} If any of the arguments does not match the expected format.
 * 
 * @throws {NotFoundError} If the user is not found.
 * 
 * @returns userId
 */

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email: `${email}` })
    .catch(error => {
        throw new SystemError(error.message)
    })
    .then(user => {
        if(!user) throw new NotFoundError(`user with email ${email} not found`)
        if (user.password !== password) throw new AuthError('wrong password')

        return user.id
    })
}


module.exports = authenticateUser