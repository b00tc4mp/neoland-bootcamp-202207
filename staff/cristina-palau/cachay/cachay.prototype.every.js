Cachay.prototype.every = function(element) {
    let result = ''
    for (let i = 0; i < this.length; i++) {
        if (this[i] === element)
            return result = true
        else result = false
    }
    
    return result
}
