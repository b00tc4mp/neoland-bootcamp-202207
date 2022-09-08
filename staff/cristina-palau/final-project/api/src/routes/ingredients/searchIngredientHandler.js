const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { ingredients: { searchIngredient } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
       
        const { query: { q: query }} = req

        return searchIngredient(query)
            .then(ingredients => res.status(200).json(ingredients))
    }, res, logger)
}