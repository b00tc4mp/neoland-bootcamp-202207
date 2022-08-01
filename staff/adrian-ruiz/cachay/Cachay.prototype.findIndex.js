Cachay.prototype.findIndex = function (callback){
    // TODO Validate INPUTS

    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            return i
        }
    }
    return -1
}