const { BadRequestError } = require('errors')

function validateCart(Cart, explain = 'Cart') {
    if (!Cart) throw new BadRequestError(`${explain} is empty`)
}

module.exports = validateCart