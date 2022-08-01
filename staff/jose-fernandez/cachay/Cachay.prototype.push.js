Cachay.prototype.push=function(callback){
    const result=[]
    for(let i=0;i<this.length;i++){
        const element= this[i]

        result[result.length]=element
    }
    return result
}