const { runWithErrorHandling, createLogger, verifyToken } = require("../../utils")
const { movement: { movementInput } } = require("../../logic")
const { verify } = require("jsonwebtoken")
const logger = createLogger(module)

module.exports = (req, res) => {
  
  const userId = verifyToken(req)
  runWithErrorHandling(() => {
    const { body: { productName, category, quantity } } = req

    return movementInput(userId, productName, category, quantity)
      .then(() => res.status(201).send())
    }, res, logger)
}