const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { recipes: { retrieveRecipeIngredients } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        debugger
        const userId = verifyToken(req)

        const { params: { recipeId } } = req
        debugger

        return retrieveRecipeIngredients(userId, recipeId)
            .then(ingredients => res.json(ingredients))
    }, res, logger)
}