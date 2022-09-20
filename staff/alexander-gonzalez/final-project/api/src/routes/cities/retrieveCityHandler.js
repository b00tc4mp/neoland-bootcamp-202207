const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { cities :{ retrieveCity} } = require('../../logic')
const logger = createLogger(module) 

module.exports = (req, res ) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        const { params: { cityId } } = req

        return retrieveCity(userId, cityId)
            .then(cities => res.status(200).json(cities))
    }, res, logger)
}