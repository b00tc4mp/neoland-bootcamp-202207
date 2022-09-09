const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { recipes: { createRecipe } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)
debugger
        const { body: { title, persons, ingredients } } = req
debugger
        return createRecipe(userId, title, persons, ingredients)
            .then(() => res.status(201).send())
    }, res, logger)
}