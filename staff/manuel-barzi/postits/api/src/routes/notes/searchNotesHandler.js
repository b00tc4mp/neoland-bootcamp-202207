const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { notes: { searchNotes } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        const { query: { q: query }} = req

        return searchNotes(userId, query)
            .then(notes => res.status(200).json(notes))
    }, res, logger)
}