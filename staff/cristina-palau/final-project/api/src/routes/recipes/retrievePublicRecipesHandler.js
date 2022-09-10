const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { recipes: { retrievePublicRecipes } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {

        const userId = verifyToken(req)

        return retrievePublicRecipes(userId)
            .then(recipe => res.json(recipe))

    }, res, logger)
}