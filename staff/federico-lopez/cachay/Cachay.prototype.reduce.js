Cachay.prototype.reduce = function (callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0]

    const firstIndex = initialValue !== undefined ? 0 : 1

    for (let i = firstIndex; i < this.length; i++) {
        const element = this[i]

        accumulator = callback(accumulator, element)
    }
    return accumulator
}