const { CredentialsError, NotFoundError, SystemError } = require('../errors')
const { validateEmail, validatePassword } = require('../validators')
const { User } = require('../models')

module.exports = function (email, password) {
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email }).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with email ${email} not found`)
            if (user.password !== password)
                throw new CredentialsError('email or password incorrect')
            
            return user._id.toString() // como lo he traido como un pojo con lean, tengo q extraer
            // el id con _id y como es un objeto, convertirlo a string
        })
}