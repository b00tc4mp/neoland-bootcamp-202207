const { model } = require('mongoose')
const { user, recipe, ingredient, ingredientItem} = require('./schemas')

module.exports = {
    User: model('User', user),
    Recipe: model('Recipe', recipe),
    IngredientItem: model('IngredientItem', ingredientItem),
    Ingredient: model('Ingredient', ingredient),

}