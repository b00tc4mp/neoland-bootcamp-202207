const { UnknownError, DuplicityError } = require('errors')
const { validateName, validatePassword, validateEmail } = require('validators')
const { User } = require('../models/index')


function registerUser(name, email, password) {
    //TODO validate inputs
    validateName(name)
    validatePassword(password)
    validateEmail(email)

    return (async () => {
        const found = await User.findOne({ 'email': email })

        if (found) throw new DuplicityError(`User with email ${email} already exists`)

        await User.create({ name, email, password })

    })()

}
module.exports = registerUser