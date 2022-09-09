const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { recipes: { updateRecipe } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {

        const userId = verifyToken(req)
debugger
        const { body: { title, persons, ingredients }, params: {recipeId} } = req
debugger
        return updateRecipe(userId, recipeId, title, persons, ingredients)
            .then(() => res.status(204).send())
    }, res, logger)
}