const { model } = require('mongoose')
const { user, recipe, ingredient } = require('./schemas')

module.exports = {
    User: model('User', user),
    // Recipe: model('Recipe', recipe)
    Ingredient: model('Ingredient', ingredient)
}