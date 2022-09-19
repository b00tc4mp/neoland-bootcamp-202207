const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { lists: { createList } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        const { body: { title, ingredients } } = req
      
        return createList(userId, title, ingredients)
            .then(() => res.status(201).send())
    }, res, logger)
}