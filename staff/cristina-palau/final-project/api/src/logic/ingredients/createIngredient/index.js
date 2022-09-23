const { Ingredient } = require('../../../models')
const { DuplicityError, SystemError } = require('errors')
const { validateText } = require('validators')

 function createIngredient(name, type) {
    validateText(name, 'name')
    validateText(type, 'type')

    return Ingredient.create({ name, type })
        .then(ingredient => {})
        .catch(error => {
            if (error.code === 11000)
                throw new DuplicityError('ingredient already exists')

            throw new SystemError(error.message)
        })
}

module.exports = createIngredient

