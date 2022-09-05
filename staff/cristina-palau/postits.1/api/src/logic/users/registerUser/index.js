const { User } = require('../../../models')
const { DuplicityError, SystemError } = require('../../../errors')
const { validateEmail, validatePassword, validateText } = require('../../../validators')

/**
 * 
 * @param {string} name 
 * @param {string} email 
 * @param {string} password 
 * 
 * 
 * @returns 
 */

 function registerUser(name, email, password) {
    validateText(name, 'name')
    validateEmail(email)
    validatePassword(password)

    return User.create({ name, email, password })
        .then(user => {})
        .catch(error => {
            if (error.code === 11000)
                throw new DuplicityError('user already exists')

            throw new SystemError(error.message)
        })
}

module.exports = registerUser

