const { runWithErrorHandling, createLogger, verifyToken } = require("../../utils")
const { products: { createProduct } } = require("../../logic")
const { verify } = require("jsonwebtoken")
const logger = createLogger(module)

module.exports = (req, res) => {
  
  const userId = verifyToken(req)
  runWithErrorHandling(() => {
    const { body: { productName, category, quantity, description } } = req

    return createProduct(userId, productName, category, quantity, description)
      .then(() => res.status(201).send())
    }, res, logger)
}