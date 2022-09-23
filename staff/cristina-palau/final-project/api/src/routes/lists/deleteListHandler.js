const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { lists: { deleteList } } = require('../../logic')
const logger = createLogger(module)


module.exports = (req, res) => {
    runWithErrorHandling(() => {

        const userId = verifyToken(req)

        const { params: { listId } } = req

        return deleteList(userId, listId)
            .then(()=> res.status(200).send())

    }, res, logger)
}