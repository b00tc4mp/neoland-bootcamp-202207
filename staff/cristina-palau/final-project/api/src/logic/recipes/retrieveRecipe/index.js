const { User, Recipe } = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
const { verifyObjectIdString } = require('../../../utils')

function retrieveRecipe(userId, recipeId) {
    verifyObjectIdString(userId, 'user id')
    verifyObjectIdString(recipeId, 'recipe id')

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Recipe.findById(recipeId).populate({ path: 'ingredients.ingredient', select: 'name' }).lean()
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(recipe => {
            if (!recipe) throw new NotFoundError(`recipe with id ${recipeId} not found`)

            recipe.id = recipe._id.toString()
            delete recipe._id
            delete recipe.__v

            recipe.ingredients.forEach(ingredient => {
                ingredient.id = ingredient._id.toString()
                delete ingredient._id
                delete ingredient.__v
            })

            debugger
            
            return recipe

        })
}
module.exports = retrieveRecipe