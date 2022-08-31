const { verifyToken, logger, errorHandler } = require('../../utils')
const { createNote } = require('../../logic')
const { CredentialsError } = require('../../errors')

module.exports = (req, res) => {
    try {
        const token = req.headers.authorization.substring(7)
        const userId = verifyToken(token)
        createNote(userId)
            .then(() => {
                res.json()
                logger.info(`user ${userId} created blank note`)
            })
            .catch(error => {
                errorHandler(error, res)
                return
            })
    } catch (error) {
        if (error instanceof TypeError) error = new CredentialsError(error) // por si viene del substring, cambiarlo
        errorHandler(error, res)
        return
    }
}