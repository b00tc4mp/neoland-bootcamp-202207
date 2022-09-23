const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { lists: { retrieveUserLists } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {

        const userId = verifyToken(req)

        return retrieveUserLists(userId)
            .then(lists => res.json(lists))

    }, res, logger)
}