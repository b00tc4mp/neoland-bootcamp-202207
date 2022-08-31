const { verifyToken, logger, errorHandler } = require('../../utils')
const { retrieveNotes } = require('../../logic')
const { CredentialsError } = require('../../errors')

module.exports = (req, res) => {
    try {
        const token = req.headers.authorization.substring(7)
        const userId = verifyToken(token)
        retrieveNotes(userId)
            .then(notes => {
                res.json(notes)
                logger.info(`user ${userId} retrieved notes`)
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