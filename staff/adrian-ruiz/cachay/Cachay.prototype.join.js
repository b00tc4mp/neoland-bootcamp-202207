Cachay.prototype.join = function(separator){
    let newText = ""
    if(separator === undefined)
        separator = ","
    for(let i = 0; i < this.length; i++){
        if(i === this.length -1){
            newText = newText + this[i]
        }else
        newText = newText + this[i] + separator

    }
    return newText
}