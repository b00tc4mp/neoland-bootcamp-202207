const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { auction: { createAuction } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)
        
        
        const { body: { title, dateForBit, value, createdAt, image } } = req

        debugger

        return createAuction({ author: userId, title, dateForBit: new Date(dateForBit), value, createdAt: new Date(createdAt), image })
            .then(() => res.status(201).send())
    }, res, logger)
}