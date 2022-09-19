const { User, List, IngredientItem } = require('../../../models')
const { NotFoundError, SystemError, FormatError } = require('errors')
const { verifyObjectIdString, } = require('../../../utils')
const { verifyIngredient } = require('../../ingredients')
const { validateString, validateArray, validateNumber } = require('validators')

function createList(userId, title, ingredients) {
     
    verifyObjectIdString(userId, 'user id')
    validateString(title, 'title')
    validateArray(ingredients)
     
    ingredients.forEach(ingredient => verifyIngredient(ingredient))

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            const ingredientItems = ingredients.map(ingredient => {
                const { id, quantity, unit, type } = ingredient
                 
                const ingredientItem = new IngredientItem({
                    ingredient: id,
                    quantity,
                    unit,
                    type
                })
                 
                return ingredientItem
            })
             
            return List.create({ creator: user._id, title: title, ingredients: ingredientItems })
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(recipe => { })

}

module.exports = createList

