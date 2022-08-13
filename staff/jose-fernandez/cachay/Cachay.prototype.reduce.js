Cachay.prototype.reduce = function (callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0]
    let firtsIndex = initialValue !== undefined ? 0:1
    for (let i = firtsIndex; i < this.length; i++) {
        const element = this[i]

        accumulator = callback(accumulator, element)
    }
    return accumulator
}