const { verify, JsonWebTokenError, NotBeforeError, TokenExpiredError } = require('jsonwebtoken')
const { TokenError, SystemError } = require('errors')
const { Blacklist } = require('../models')

module.exports = async function (token) {
    try {
        debugger
        const res = await Blacklist.findOne({ token })
        if (res) throw new TokenError('invalid token')
        const payload = verify(token, 'ilovethisshit')
        return payload.sub
    } catch (error) {
        if (error instanceof JsonWebTokenError || error instanceof NotBeforeError || error instanceof TokenExpiredError || error instanceof TokenError)
            throw new TokenError(error.message)

        else
            throw new SystemError(error.message) // preguntar por q pasa por aqui cuando modifico la segunda parte del token
    }
}