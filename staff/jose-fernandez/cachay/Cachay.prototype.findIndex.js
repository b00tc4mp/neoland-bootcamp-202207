Cachay.prototype.findIndex=function(callback){
    for(let i=0;i<this.length;i++){
        const element= this[i]

        callback(element)
    }
}