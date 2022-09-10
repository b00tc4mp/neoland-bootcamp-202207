const { BadRequestError } = require('errors')

function validateCart(cart, explain = 'cart') {
    if (cart instanceof Array === false) throw new BadRequestError(`${explain} is not an array`)
    if (cart.length === 0) throw new BadRequestError(`${explain} is empty`)
    debugger
}

module.exports = validateCart