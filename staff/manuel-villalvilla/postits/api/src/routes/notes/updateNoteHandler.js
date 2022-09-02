const { verifyToken, errorHandler, logger } = require('../../utils')
const { updateNoteText, updateNoteVisibility } = require("../../logic")
const { TokenError } = require('../../errors')

module.exports = (req, res) => {
    try {
        const { query: { note: noteId, text, visibility }, headers: { authorization } } = req
        const token = authorization.substring(7)
        const userId = verifyToken(token)
        if (text || text === '')
            updateNoteText(userId, noteId, text)
                .then(() => logger.info(`user ${userId} edited note ${noteId} text`))
                .catch(error => {
                    errorHandler(error, res)
                    return
                })
        if (visibility)
            updateNoteVisibility(userId, noteId, visibility)
                .then(() => logger.info(`user ${userId} edited note ${noteId} visibility to ${visibility}`))
                .catch(error => {
                    errorHandler(error, res)
                    return
                })
    } catch (error) {
        if (error instanceof TypeError) error = new TokenError(error) // por si viene del substring, cambiarlo
        errorHandler(error, res)
        return
    }
    res.status(204).json()
}