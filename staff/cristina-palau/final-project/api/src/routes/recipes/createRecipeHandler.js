const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { recipes: { createRecipe } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        const { body: { title, persons, ingredients } } = req
      
        return createRecipe(userId, title, persons, ingredients)
            .then(() => res.status(201).send())
    }, res, logger)
}