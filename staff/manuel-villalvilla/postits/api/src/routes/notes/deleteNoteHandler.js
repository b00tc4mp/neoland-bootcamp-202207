const { deleteNote } = require('../../logic')
const { TokenError } = require('errors')
const { errorHandler, logger, verifyToken } = require('../../utils')

module.exports = (req, res) => {
    try {
        const { headers: { authorization }, params: { noteId } } = req
        const token = authorization.substring(7)
        verifyToken(token)
            .then(userId => deleteNote(userId, noteId)
                .then(() => {
                    res.status(204).json()
                    logger.info(`user ${userId} deleted note ${noteId}`)
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