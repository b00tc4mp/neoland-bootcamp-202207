const { User } = require('../../../models')
const { validateEmail, validatePassword } = require('../../../validators')
const { AuthError, NotFoundError} = require('../../../errors')


async function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    const userFounded = await User.findOne({ email: `${email}` })

    if (!userFounded) throw new NotFoundError(`user with email ${email} not found`)

    if (userFounded.password !== password) throw new AuthError('wrong password')

    else
        return userFounded.id
}


module.exports = authenticateUser