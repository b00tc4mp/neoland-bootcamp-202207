const { User, List } = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
const { verifyObjectIdString } = require('../../../utils')

function retrieveList(userId, listId) {
    verifyObjectIdString(userId, 'user id')
    verifyObjectIdString(listId, 'list id')

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return List.findById(listId).populate({ path: 'ingredients.ingredient', select: 'name type' }).lean()

                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(list => {
            if (!list) throw new NotFoundError(`list with id ${listId} not found`)
             
            list.id = list._id.toString()
            delete list._id
            delete list.__v

            list.ingredients.forEach(ingredient => {
                ingredient.id = ingredient._id.toString()
                ingredient.ingredient.id = ingredient.ingredient._id.toString()
                 
                delete ingredient._id
                delete ingredient.ingredient._id
                delete ingredient.__v
                delete ingredient.ingredient._v
            })

            return list
        })
}
module.exports = retrieveList