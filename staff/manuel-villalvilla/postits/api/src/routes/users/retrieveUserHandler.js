const { verifyToken, logger, errorHandler } = require('../../utils')
const { retrieveUser } = require('../../logic')
const { TokenError } = require('../../errors')

module.exports = (req, res) => {
    try {
        const token = req.headers.authorization.substring(7)
        const userId = verifyToken(token)
        retrieveUser(userId)
            .then(user => {
                res.json(user)
                logger.info(`user ${userId} retrieved`)
            })
            .catch(error => {
                errorHandler(error, res)
                return
            })
    } catch (error) {
        if (error instanceof TypeError) error = new TokenError(error) // por si viene del substring, cambiarlo
        errorHandler(error, res)
        return
    }
}