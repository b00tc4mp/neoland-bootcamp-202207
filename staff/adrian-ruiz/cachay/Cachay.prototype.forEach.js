Cachay.prototype.forEach = function(callback) {
    if(typeof callback !== 'function') throw new Error(`${callback} is not a function`)

    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        callback(element)
    }
}