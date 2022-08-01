Cachay.prototype.push = function(...element){
    
    for(let i = 0; i < element.length; i++){
        this[this.length] = element[i]
        this.length++
    }
    return this.length
}   