const { NotFoundError, AuthError, SystemError } = require("errors")
const { User, Product } = require("../../../models")
const { verifyObjectIdString } = require("../../../utils")

function deleteProduct (userId, productId) {
  verifyObjectIdString(userId, 'user id')
  verifyObjectIdString(productId, 'product id')

  return User.findById(userId)
    .then(user => {
      if(user.role !== 'admin'){
        throw new Error(`${user.name} does not have permission to delete`)
      }
      return Product.findById(productId)
      .then(foundProduct => {
        if(!foundProduct){
          throw new Error(`No product found with id ${productId}`)
        }
        return foundProduct.delete()
      })
    })
    .catch(error => {
      throw new SystemError(error.message)
    })

}
module.exports = deleteProduct 