const { Ingredient } = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
const { validateString } = require('validators')

function searchIngredient(query) {
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