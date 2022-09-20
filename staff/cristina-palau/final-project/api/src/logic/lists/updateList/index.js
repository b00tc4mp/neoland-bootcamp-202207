const { NotFoundError, AuthError, SystemError } = require("errors")
const { User, List, IngredientItem } = require("../../../models")
const { verifyObjectIdString } = require("../../../utils")
const { verifyIngredient } = require('../../ingredients')
const { validateString, validateArray } = require("validators")

function updateList(userId, listId, title, ingredients) {
    debugger
    verifyObjectIdString(userId, 'user id')
    verifyObjectIdString(listId, 'list id')
    validateString(title, 'title')
    validateArray(ingredients)

    ingredients.forEach(ingredient => verifyIngredient(ingredient))

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return List.findById(listId)
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(list => {
            if (!list) throw new NotFoundError(`list with id ${listId} not found`)

            if (list.creator.toString() !== userId) throw new AuthError(`list with id ${listId} does not belong to user with id ${userId}`)

            const ingredientItems = ingredients.map(ingredient => {
                const { id, quantity, unit } = ingredient

                const ingredientItem = new IngredientItem({
                    ingredient: id,
                    quantity: quantity,
                    unit
                })

                return ingredientItem
            })
            
            list.title = title
            list.ingredients = ingredientItems
            list.modifiedAt = Date.now()

            return list.save()
        })
        .then(list => { })
}

module.exports = updateList