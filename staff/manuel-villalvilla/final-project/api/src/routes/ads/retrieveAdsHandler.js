const { retrieveFilteredAds } = require('../../logic')
const { logger } = require('../../utils')

module.exports = (req, res) => {
    const { query: { page = 1, limit = 10, country } } = req

    try {
        retrieveFilteredAds(country, page, limit)
            .then(paginatedAds => res.status(200).json(paginatedAds))
            .catch(error => {
                logger.error(error.message)
                res.status(500).json({ error: 'mongo system error' })
                return
        })
    } catch (error) {
        logger.error(error.message)
        res.status(401).json({ error: 'invalid ad filters' })
    }
}