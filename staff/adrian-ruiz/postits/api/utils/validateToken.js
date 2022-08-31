const { verify } = require('jsonwebtoken')
const { validateText } = require('validators')
function validateToken(req) {

    const { headers: { authorization } } = req

    validateText(authorization, 'authorization')

    const token = authorization.substring(7)
    const payload = verify(token, 'ImagineLosingTimeToHackThis')

    const userId = payload.sub

    return userId
}

module.exports = validateToken