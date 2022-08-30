const { NotFoundError, SystemError } = require('../errors')
const { User } = require('../models')
const { validateObjectId } = require('../validators')

module.exports = function (userId) {
    validateObjectId(userId)
    // interesa usar lean para q no traiga el modelo entero (muy pesado) y solo traiga un pojo (plain old javascript object)
    return User.findById(userId, 'name email').lean() // para q devuelva un modelo sin el password (projections)
        .catch(error => {throw new SystemError(error.message)})
        .then(user => {
            if (!user) throw new NotFoundError('user not found')
            // borro el _id de dentro para no devolverlo
            delete user._id
            return user
        })
}