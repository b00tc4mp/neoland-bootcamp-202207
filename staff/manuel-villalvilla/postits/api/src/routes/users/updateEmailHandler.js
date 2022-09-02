const { verifyToken, logger, errorHandler } = require('../../utils')
const { TokenError } = require('../../errors')
const { updateEmail } = require('../../logic')

module.exports = (req, res) => {
    const { body: { email: newEmail } } = req

    try {
        const token = req.headers.authorization.substring(7)
        let userId = verifyToken(token)

        updateEmail(userId, newEmail)
            .then(() => {
                res.status(204).send()
                logger.info(`user ${userId} changed email to ${newEmail}`)
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