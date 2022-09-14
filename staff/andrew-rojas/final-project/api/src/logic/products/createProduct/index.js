const { User, Product } = require ("../../../models")
const { NotFoundError, SystemError} = require("errors")
const { validateString, validateQuantity } = require ("validators")
const { verifyObjectIdString } = require("../../../utils")

// TODO rename to createProduct
function createProduct(userId, name, category, quantity, description = '') {
  verifyObjectIdString(userId, "user id")
  validateString(name, "name")
  validateString(category, "category")
  validateString(description, "description")
  validateQuantity(quantity, "number")
  // if(typeof quantity !== "number") throw new TypeError(`${quantity} is not a number`)

    return User.findById(userId).lean()
      .catch(error => {
        throw new SystemError(error.message)
      })
      .then(user => {
        if(!user) throw new NotFoundError(`user with id ${userId} not found`)

        return Product.create({ user: user._id, name, category, quantity, description })
          .catch(error => {
            throw new SystemError(error.message)
          })
      })   
      .then( product => { })

}

module.exports = createProduct