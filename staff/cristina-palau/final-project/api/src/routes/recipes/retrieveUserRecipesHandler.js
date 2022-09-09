const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { recipes: { retrieveUserRecipes } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {

        const userId = verifyToken(req)

        return retrieveUserRecipes(userId)
            .then(recipe => res.json(recipe))

    }, res, logger)
}