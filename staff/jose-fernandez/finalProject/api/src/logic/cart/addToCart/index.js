const { User, Cart } = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
const { verifyObjectIdString } = require('../../../utils')

// FALTA
function addToCart(userId, cartId) {
    verifyObjectIdString(userId, 'user id')

    return Promise.all([
        User.findById(userId).lean(),
        Cart.findById(cartId)
        ])
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(([user, cart]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            if(!cart) throw new NotFoundError(`cart with id ${cartId} not found`)

            // COMPROBAR QUE EL CART PERTENECE AL USUARIO

            return Cart.create({ user: user._id})
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(cart => { })
}

module.exports = addToCart