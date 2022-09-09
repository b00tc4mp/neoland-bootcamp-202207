const { Product } = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
// const { verifyObjectIdString } = require('../../../utils')
const { validateString } = require('validators')

function searchProduct(query) {
    // verifyObjectIdString(product, 'product')
    validateString(query)

    return Product.findBy({name:{$regex: new RegExp(query)}},'text visibility ').lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(products => {
            if (!products) throw new NotFoundError(`product with ${query} characters does not exist`)
            products.forEach(product => {

                product.id = product._id.toString()
                delete product._id

                delete product.__v
            })

            return products
        })
}

module.exports = searchProduct