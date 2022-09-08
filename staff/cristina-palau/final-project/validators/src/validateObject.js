function validateObject(object) {
    if (typeof object !== 'object') throw new TypeError(`${object} is not a object`)
}

module.exports = validateObject