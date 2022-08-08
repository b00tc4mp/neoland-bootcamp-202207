Cachay.prototype.find = function(callback){
    // TODO input validations
    if(!(callback instanceof Function)) throw new TypeError(`${callback} is not a Function`)

    for(let i = 0; i < this.length; i++){
        if(callback(this[i]))
            return this[i]
    }
    return undefined
}