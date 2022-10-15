const { User } = require('../models')
const { DuplicityError, SystemError } = require('../errors')
const { validateText, validateEmail, validatePassword } = require('../validators')

function registerUser(name, email, password) {
    validateText(name, 'name')
    validateEmail(email)
    validatePassword(password)

    return User.create({ name, email, password })
        .then(user => {})
        // como yo quiero asegurarme que no devuelva nada hago esto, para conseguir undifined
        .catch(error => {
            console.log(error)
            if (error.code === 11000)
                throw new DuplicityError('user already exists')

            throw new SystemError(error.message)
        })
}

module.exports = registerUser