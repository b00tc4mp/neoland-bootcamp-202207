const { User, Recipe } = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
const { verifyObjectIdString } = require('../../../utils')

function retrieveRecipeIngredients(userId, recipeId) {

    debugger
    verifyObjectIdString(userId, 'user id')
    verifyObjectIdString(recipeId, 'recipe id')

    debugger

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Recipe.findById(recipeId).populate({ path: 'ingredients.ingredient', select: 'name type' }).lean()

                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(recipe => {
            debugger
            if (!recipe) throw new NotFoundError(`recipe with id ${recipeId} not found`)

            recipe.id = recipe._id.toString()
            delete recipe._id
            delete recipe.__v
            debugger
            allIngredients = recipe.ingredients
            debugger
            allIngredients.forEach(ingredient => {
                ingredient.id = ingredient._id.toString()
                ingredient.ingredient.id = ingredient.ingredient._id.toString()

                delete ingredient._id
                delete ingredient.ingredient._id
                delete ingredient.__v
                delete ingredient.ingredient._v
            })

            return allIngredients
        })
}
module.exports = retrieveRecipeIngredients