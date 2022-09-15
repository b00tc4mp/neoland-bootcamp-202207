const { validateObject, validateNumber, validateString } = require('validators')
const verifyObjectIdString = require('../../../utils/verifyObjectIdString')

function verifyIngredient(ingredient) {
    
    validateObject(ingredient)

    const { id, quantity, unit } = ingredient

    verifyObjectIdString(id, 'ingredient id')
    validateNumber(quantity, 'ingredient quantity')
    validateString(unit, 'ingredient unit')
}

module.exports = verifyIngredient