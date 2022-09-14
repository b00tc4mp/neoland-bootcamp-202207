const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { products: { deleteProduct } } = require('../../logic')
const logger = createLogger(module)


module.exports = (req, res) => {
    runWithErrorHandling(() => {

        const userId = verifyToken(req)

        const { params: { productId } } = req

        return deleteProduct(userId, productId)
            .then(()=> res.status(200).send())

    }, res, logger)
}