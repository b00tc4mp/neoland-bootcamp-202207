const { User } = require('../models')
const { validateEmail, validatePassword } = require('../validators')
const jwt = require('jsonwebtoken');
const { AuthError, SystemError } = require('../errors')


async function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    const userFounded = await User.findOne({ email: `${email}`, password: `${password}` })

    if (userFounded) {
        const token= jwt.sign({ userId: userFounded._id }, 'RANDOM_TOKEN_SECRET', { expiresIn: '1h' })
        
        return token}

    else
        throw new AuthError('wrong credentials')

}

module.exports = authenticateUser