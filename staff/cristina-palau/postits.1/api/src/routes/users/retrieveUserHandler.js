const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { users: { retrieveUser } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(async () => {

        const userId = verifyToken(req)

        const user = await retrieveUser(userId)

        res.json(user)

    }, res, logger)
}