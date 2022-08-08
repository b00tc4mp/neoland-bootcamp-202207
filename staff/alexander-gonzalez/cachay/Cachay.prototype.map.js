Cachay.prototype.map = function (callback) {
    let result = new Cachay
    //let result = new Cachay()

    for (let i = 0; i < this.length; i++) {
        const newElement = callback(this[i])
        
        result[result.length++] = newElement

        // result[result.length++] = callback(this[i])

        // result[result.length] = newElement
        // result.length++
    }

    return result
}