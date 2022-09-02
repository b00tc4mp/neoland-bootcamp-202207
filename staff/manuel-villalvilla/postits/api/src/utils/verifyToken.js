const { verify, JsonWebTokenError, NotBeforeError, TokenExpiredError } = require('jsonwebtoken')
const { TokenError, SystemError } = require('../errors')

module.exports = function (token) {
    try {
        const payload = verify(token, 'ilovethisshit')
        return payload.sub
    } catch (error) {
        if (error instanceof JsonWebTokenError || error instanceof NotBeforeError || error instanceof TokenExpiredError)
            throw new TokenError(error.message)

        else
            throw new SystemError(error.message) // preguntar por q pasa por aqui cuando modifico la segunda parte del token
    }
}