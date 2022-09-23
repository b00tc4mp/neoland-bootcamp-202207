const { Ingredient } = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
const { validateString } = require('validators')
const verifyObjectIdString = require('../../../utils/verifyObjectIdString')

function retrieveIngredient(userId) {
    verifyObjectIdString(userId, 'user id')


    return Ingredient.find({}, 'name type').lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(ingredients => {
            ingredients.forEach(ingredient => {

                ingredient.id = ingredient._id.toString()
                delete ingredient._id

                delete ingredient.__v
            })

            return ingredients
        })
}

module.exports = retrieveIngredient