const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { cities :{ searchCities} } = require('../../logic')
const logger = createLogger(module) 

module.exports = (req, res ) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        const { query: { q: query}} = req

        return searchCities(userId, query)
            .then(cities => res.status(200).json(cities))
    }, res, logger)
}