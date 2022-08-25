const { CredentialsError } = require('../errors')
const { validateCallback } = require('../validators')
const { Users } = require('../models')
const jwt = require('jsonwebtoken')

module.exports = async function (email, password, callback) {
    validateCallback(callback)

    const user = await Users.findOne({ email, password })

    const token = jwt.sign({ data: 'preguntarsiponeremailaqui' }, 'ilovethisshit', { expiresIn: '1h' })

    if (user) return callback(null, token)

    return callback(new CredentialsError('email or password incorrect'))
}