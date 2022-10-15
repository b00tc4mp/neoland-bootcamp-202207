// Ejecuta la función indicada una vez por cada elemento del array

Cachay.prototype.forEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        callback(element)
    }
}