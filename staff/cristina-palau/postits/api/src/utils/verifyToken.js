const { verify } = require('jsonwebtoken')
const { validateText } = require('../validators')

module.exports = req => {
    const { headers: { authorization } } = req

    validateText(authorization, 'authorization')

    const token = authorization.substring(7)

    const payload = verify(token, 'frase random para el token')

    const { sub: userId } = payload

    return userId
}

