const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { lists: { retrieveList } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {

        const userId = verifyToken(req)

        const { params: { listId } } = req
 
        return retrieveList(userId, listId)
            .then(list => res.json(list))

    }, res, logger)
}