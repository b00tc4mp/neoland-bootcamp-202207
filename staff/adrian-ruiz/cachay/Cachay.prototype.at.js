Cachay.prototype.at = function (index){
    if(typeof index !== 'number' || isNaN(index) === true) throw new Error(`${index} is not a number`)
    if(index === -1)
        return this[this.length-1]
    if(index < this.length && index >= 0)
        return this[index]
    else return undefined
}