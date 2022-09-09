const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { recipes: { deleteRecipe } } = require('../../logic')
const logger = createLogger(module)


module.exports = (req, res) => {
    runWithErrorHandling(() => {

        const userId = verifyToken(req)

        const { params: { recipeId } } = req

        return deleteRecipe(userId, recipeId)
            .then(()=> res.status(200).send())

    }, res, logger)
}