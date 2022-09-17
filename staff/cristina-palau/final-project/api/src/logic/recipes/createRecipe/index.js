const { User, Recipe, IngredientItem } = require('../../../models')
const { NotFoundError, SystemError, FormatError } = require('errors')
const { verifyObjectIdString, } = require('../../../utils')
const { verifyIngredient } = require('../../ingredients')
const { validateString, validateArray, validateNumber } = require('validators')

function createRecipe(userId, title, persons, ingredients) {
     
    verifyObjectIdString(userId, 'user id')
    validateString(title, 'title')
    validateNumber(persons)
    validateArray(ingredients)
     
    ingredients.forEach(ingredient => verifyIngredient(ingredient))

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            const ingredientItems = ingredients.map(ingredient => {
                const { id, quantity, unit } = ingredient
                 
                const ingredientItem = new IngredientItem({
                    ingredient: id,
                    quantity: quantity,
                    unit
                })
                 
                return ingredientItem
            })
             
            return Recipe.create({ creator: user._id, title: title, persons: persons, ingredients: ingredientItems })
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(recipe => { })

}

module.exports = createRecipe

