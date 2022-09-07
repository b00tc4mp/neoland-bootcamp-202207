const { runWithErrorHandling, createLogger } = require('../../utils')
const { ingredients: { createIngredient } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
   runWithErrorHandling(() => {
        const { body: [{ name, type }] } = req

       return createIngredient(body)
        .then(ingredient => res.status(201).send())

    }, res, logger)
} 