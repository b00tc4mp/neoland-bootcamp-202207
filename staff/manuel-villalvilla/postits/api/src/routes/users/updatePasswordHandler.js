const { verifyToken, logger, errorHandler } = require('../../utils')
const { TokenError } = require('../../errors')
const { updatePassword } = require('../../logic')

module.exports = (req, res) => {
    const { body: { oldPassword, password: newPassword } } = req
    try {
        const token = req.headers.authorization.substring(7)
        userId = verifyToken(token)

        updatePassword(userId, oldPassword, newPassword)
            .then(() => {
                res.status(204).send()
                logger.info(`user ${userId} updated password`)
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