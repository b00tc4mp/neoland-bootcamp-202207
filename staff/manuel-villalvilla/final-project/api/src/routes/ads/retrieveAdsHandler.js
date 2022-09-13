const { retrieveFilteredAds } = require('../../logic')
const { logger } = require('../../utils')

module.exports = (req, res) => {
    const { query: { page = 1, limit = 10, country, province, search, categories } } = req
    
    const queryParams = new function () {
        this['location.country'] = country

        if (province)
            this['location.province'] = province

        this.visibility = 'public'

        this.verified = true

        if (search) {
            this.$or = [
                { body: { $regex: new RegExp(search), $options: 'i' } },
                { title: { $regex: new RegExp(search), $options: 'i' } },
                { 'location.area': { $regex: new RegExp(search), $options: 'i' } }
            ]
        }
        
        if (categories) {
            const catArray = categories.split(',') // vienen en string del query, tengo que pasarlo a array
            this.categories = { $all: catArray }
        }
    }

    try {
        retrieveFilteredAds(queryParams, page, limit)
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