Cachay.prototype.forEach=function(...args){
    let result = new Cachay

    for(let i=0;i<this.length;i++){
        for(let j=0;j<this[i].length;j++){
            result[result.length]=this[i][j]
        }
    }
    return result
}