const { User, Cart } = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
const { verifyObjectIdString } = require('../../../utils')

// FALTA
function createCart(userId) {
    verifyObjectIdString(userId, 'user id')

    return User.findById(userId).lean()

        .catch(error => {
            throw new SystemError(error.message)
        })

        .then((user) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Cart.create({ user: user._id })
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(cart => { })
}

module.exports = createCart