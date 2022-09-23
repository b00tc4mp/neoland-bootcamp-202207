const { NotFoundError, AuthError, SystemError } = require("errors")
const { User, Recipe, IngredientItem } = require("../../../models")
const { verifyObjectIdString } = require("../../../utils")
const { verifyIngredient } = require('../../ingredients')
const { validateString, validateArray, validateObject, validateNumber } = require("validators")

function updateRecipe(userId, recipeId, title, persons, ingredients) {
    verifyObjectIdString(userId, 'user id')
    verifyObjectIdString(recipeId, 'recipe id')
    validateString(title, 'title')
    validateArray(ingredients)

    ingredients.forEach(ingredient => verifyIngredient(ingredient))

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Recipe.findById(recipeId)
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(recipe => {
            if (!recipe) throw new NotFoundError(`recipe with id ${recipeId} not found`)

            if (recipe.creator.toString() !== userId) throw new AuthError(`recipe with id ${recipeId} does not belong to user with id ${userId}`)

            const ingredientItems = ingredients.map(ingredient => {
                const { id, quantity, unit } = ingredient

                const ingredientItem = new IngredientItem({
                    ingredient: id,
                    quantity: quantity,
                    unit
                })

                return ingredientItem
            })
            
            recipe.title = title
            recipe.persons = persons
            recipe.ingredients = ingredientItems
            recipe.modifiedAt = Date.now()

            return recipe.save()
        })
        .then(recipe => { })
}

module.exports = updateRecipe