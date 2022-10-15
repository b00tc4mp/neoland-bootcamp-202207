//crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada
Cachay.prototype.filter = function (callback) {
    const result = new Cachay
    for (let i = 0; i < this.length; i++) {

        const element = this[i]
        const matches = callback(element)

        if (matches)
            result[result.length++] = element
    }
    return result

}
