const { User, Product } = require ("../../../models")
const { NotFoundError, SystemError} = require("errors")
// const { validateString } = require ("validators")
const { verifyObjectIdString } = require("../../../utils")

function retrieveProducts(userId) {
  verifyObjectIdString(userId, "user id")
  // verifyObjectIdString(productId, "product id")
  // validateString(name, "name")
  // validateString(category, "category")
  // validateString(description, "description")
  // if(typeof quantity !== "number") throw new TypeError(`${quantity} is not a number`)

    return User.findById(userId).lean()
      .catch(error => {
        throw new SystemError(error.message)
      })
      .then(user => {
        if(!user) throw new NotFoundError(`user with id ${userId} not found`)

        return Product.find()
          .catch(error => {
            throw new SystemError(error.message)
          })
      })   
      .then( products => {
        products.forEach(product => {
          //sanitize
          product.id = product._id.toString()
          delete product._id

          delete product.__v
        })

        return products
       })
}

module.exports = retrieveProducts