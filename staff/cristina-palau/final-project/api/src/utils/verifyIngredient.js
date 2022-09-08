const validateObject = require('validators')

function verifyIngredient(ingredient) {
    validateObject(ingredient)

    const { id, qty, unit } = ingredient

    verifyObjectIdString(id, 'ingredient id')
    validateNumber(qty, 'ingredient quantity')
    validateString(unit, 'ingredient unit')

    const units = ['kg', 'l', 'units']

    if (!units.includes(unit)) throw new FormatError('invalid ingredient unit')    
}

module.exports = verifyIngredient