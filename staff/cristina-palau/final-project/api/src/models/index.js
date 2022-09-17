const { model } = require('mongoose')
const { user, recipe, ingredient, ingredientItem, list} = require('./schemas')

module.exports = {
    User: model('User', user),
    Recipe: model('Recipe', recipe),
    IngredientItem: model('IngredientItem', ingredientItem),
    Ingredient: model('Ingredient', ingredient),
    List: model('List', list)
}