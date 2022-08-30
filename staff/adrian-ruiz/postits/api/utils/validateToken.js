const { verify } = require('jsonwebtoken')

function validateToken(req){

    const { headers: { authorization } } = req

    const token = authorization.substring(7)
    const payload = verify(token, 'ImagineLosingTimeToHackThis')

    const userId = payload.sub

    return userId
}

module.exports = validateToken