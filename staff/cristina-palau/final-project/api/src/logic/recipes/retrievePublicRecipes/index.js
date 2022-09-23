const {User, Recipe} = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
const { verifyObjectIdString } = require('../../../utils')

function retrievePublicRecipes(userId) {
    verifyObjectIdString(userId, 'user id')

    return User.findById(userId).lean()
    .catch(error => {
        throw new SystemError(error.message)
    })
    .then(user => {
        if (!user) throw new NotFoundError(`user with id ${userId} not found`)

        return Recipe.aggregate([ { $sample: { size: 3 } } ])
            .catch(error => {
                throw new SystemError(error.message)
            })
    })
    .then(recipes => {
        recipes.forEach(recipe => {
   
            recipe.id = recipe._id.toString()
            delete recipe._id
            delete recipe.__v
        })
        return recipes
    })
};

module.exports = retrievePublicRecipes