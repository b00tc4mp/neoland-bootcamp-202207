function validateArray(array) {

    if (!(array instanceof Array)) throw new TypeError(`${array} is not a array`)
}

module.exports = validateArray