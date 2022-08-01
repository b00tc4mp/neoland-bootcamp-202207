Cachay.prototype.filter = function(callback) {
    if(typeof callback !== 'function') throw new Error(`${callback} is not a function`)
    let result = new Cachay()

    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            result[result.length++] = this[i]
        }
    }
    return result
}