Cachay.prototype.concat = function (...values) {
    let result = new Cachay

    for (let i = 0; i < this.length; i++)
        result[result.length++] = this[i]

    for (let i = 0; i < values.length; i++)
        for (let j = 0; j < values[i].length; j++)

            result[result.length++] = values[i][j]


    return result
}

