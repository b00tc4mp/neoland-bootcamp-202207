const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { lists: { updateList } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {

        const userId = verifyToken(req)

        const { body: { title, ingredients }, params: { listId } } = req
        debugger
        return updateList(userId, listId, title, ingredients)
            .then(() => res.status(204).send())
    }, res, logger)
}