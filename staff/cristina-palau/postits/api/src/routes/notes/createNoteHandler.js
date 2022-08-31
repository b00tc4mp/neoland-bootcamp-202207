const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { notes: { createNote } } = require('../../logic')
const logger = createLogger(module)

module.exports = async (req, res) => {
    runWithErrorHandling(async () => {
        const userId = verifyToken(req)

        const { body: { text } } = req

        await createNote(userId, text)
        
        res.status(201).send()

    }, res, logger)
}