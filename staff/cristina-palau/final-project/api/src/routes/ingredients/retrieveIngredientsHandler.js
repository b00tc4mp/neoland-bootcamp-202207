const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { ingredients: { retrieveIngredients } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {

        const userId = verifyToken(req)

        return retrieveIngredients(userId)
            .then(ingredients => res.status(200).json(ingredients))
    }, res, logger)
}