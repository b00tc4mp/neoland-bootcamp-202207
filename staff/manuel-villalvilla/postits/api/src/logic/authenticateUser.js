const { CredentialsError, NotFoundError, SystemError } = require('../errors')
const { validateEmail, validatePassword } = require('../validators')
const { Users } = require('../models')

module.exports = function (email, password) {
    validateEmail(email)
    validatePassword(password)

    return Users.findOne({ email })
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with email ${email} not found`)
            if (user.password !== password)
                throw new CredentialsError('email or password incorrect')
            
            return user.id // devuelve el string de dentro del ObjectId
        })
}