function validateArray(array) {
    if (typeof array !== 'array') throw new TypeError(`${array} is not a array`)
}

module.exports = validateArray