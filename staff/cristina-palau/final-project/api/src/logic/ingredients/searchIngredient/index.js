const { Ingredient } = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
const { validateString } = require('validators')
const verifyObjectIdString = require('../../../utils/verifyObjectIdString')

function searchIngredient(userId, query) {
    verifyObjectIdString(userId, 'user id')
    validateString(query)

    return Ingredient.find({ name: { $regex: new RegExp(query) } }, 'name type').lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(ingredients => {
            if (!ingredients) throw new NotFoundError(`ingredient with ${query} characters does not exist`)
            ingredients.forEach(ingredient => {
        
                ingredient.id = ingredient._id.toString()
                delete ingredient._id

                delete ingredient.__v
            })
                        
            return ingredients
        })
}

module.exports = searchIngredient