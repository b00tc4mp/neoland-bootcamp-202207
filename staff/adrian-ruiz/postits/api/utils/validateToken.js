const { AuthError } = require('errors')
const { verify } = require('jsonwebtoken')
const { validateText } = require('validators')
const { Blacklist } = require('../models')
function validateToken(req) {

    const { headers: { authorization } } = req

    validateText(authorization, 'authorization')

    const token = authorization.substring(7)
    const payload = verify(token, 'ImagineLosingTimeToHackThis')

    return (async () => {
        debugger
        const blackListed = await Blacklist.findOne({ token })
        if (blackListed) throw new AuthError('Token is blackListed')

        const userId = payload.sub

        return { userId, token }
    })()
}

module.exports = validateToken