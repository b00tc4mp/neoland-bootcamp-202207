const { User } = require('../../../models')
const { DuplicityError, SystemError } = require('../../../errors')
const { validateEmail, validatePassword, validateText } = require('../../../validators')

async function registerUser(name, email, password) {

    validateText(name, 'name')
    validateEmail(email)
    validatePassword(password)

    const userFound = await User.findOne({ email: email })

    if (userFound) throw new DuplicityError('user already exists')

    await User.create({name, email, password})

    return

}

module.exports = registerUser

