const { NotFoundError, AuthError, SystemError } = require("errors")
const { User, Recipe } = require("../../../models")
const { verifyObjectIdString } = require("../../../utils")

module.exports = function delenteRecipe(userId, recipeId) {
    verifyObjectIdString(userId)
    verifyObjectIdString(recipeId)
   
    return User.findById(userId)
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

            return Recipe.deleteOne({ _id: recipeId })
        })

        .then(() => { })
}