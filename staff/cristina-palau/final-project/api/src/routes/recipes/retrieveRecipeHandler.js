const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { recipes: { retrieveRecipe } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {

        const userId = verifyToken(req)

        const { params: { recipeId } } = req

        return retrieveRecipe(userId, recipeId)
            .then(recipe => res.json(recipe))

    }, res, logger)
}