Cachay.prototype.filter = function (callback) {
    const result = new Cachay

    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        const matchesFilterCondition = callback(element)

        if (matchesFilterCondition)
            result[result.length++] = element

    }
    return result
}