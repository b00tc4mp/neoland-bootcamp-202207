Cachay.prototype.reduce = function(callback, initialValue) {
    if(this.length <= 0 && !initialValue) throw new TypeError('The Cachay contains no elements and initialValue is not provided')
    if((this.length === 1 && !initialValue) || this.length === 0 && initialValue)
        return initialValue ? initialValue : this[0]

    else if(initialValue !== undefined){
        var result = initialValue
        for(let i = 0; i < this.length; i++){
            result = callback(result, this[i], i, this)
        }
        
    }else{
        result = this[0]
        for(let i = 1; i < this.length; i++)
            result = callback(result, this[i], i, this)
    }
    return result
}