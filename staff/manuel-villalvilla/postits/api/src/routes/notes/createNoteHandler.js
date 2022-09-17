const { verifyToken, logger, errorHandler } = require('../../utils')
const { createNote } = require('../../logic')
const { TokenError } = require('errors')

module.exports = (req, res) => {
    try {
        const token = req.headers.authorization.substring(7)
        verifyToken(token)
            .then(userId => createNote(userId)
                .then(() => {
                    res.json()
                    logger.info(`user ${userId} created blank note`)
                })
            )
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