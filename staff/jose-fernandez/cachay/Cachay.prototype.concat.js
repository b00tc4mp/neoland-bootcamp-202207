Cachay.prototype.forEach=function(...args){
    for(let i=0;i<this.length;i++){
        const element= this[i]

        callback(element)
    }
}