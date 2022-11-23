const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { cities :{ retrieveFavoritePlaces} } = require('../../logic')
const logger = createLogger(module) 

module.exports = (req, res ) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        return retrieveFavoritePlaces(userId)
            .then(places => res.status(200).json(places))
    }, res, logger)
}