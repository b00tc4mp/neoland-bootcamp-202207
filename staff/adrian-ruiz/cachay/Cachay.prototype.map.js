Cachay.prototype.map = function(callback){
    var result = new Cachay()
    for(let i = 0; i < this.length; i++){
        result[result.length++] = callback(this[i],i,this)
    }    
    return result
}