const { User, Cart } = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
const { verifyObjectIdString } = require('../../../utils')

// FALTA
function addToCart(userId) {
    verifyObjectIdString(userId, 'user id')

   
}

module.exports = addToCart