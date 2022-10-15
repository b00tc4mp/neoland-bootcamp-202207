Cachay.prototype.push = function (...values){
    for (let i=0; i <values.length;i++){
        const element = values[i]
    
        this[this.length++] = element
}  
    return this.length
}
