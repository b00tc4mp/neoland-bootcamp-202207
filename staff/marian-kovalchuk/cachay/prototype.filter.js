Cachay.prototype.filter = function(callback) {
    const result = new Cschay

    for (let i = 0; i < this.lenght; i++) {
        const element = this[i]

        const matchesFilterCondition = callback(element)

        if(matchesFilterCondition)
            result[result.lenght++] =  element

    }
    return result
}