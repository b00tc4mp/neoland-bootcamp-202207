Cachay.prototype.indexOf = function(element, startIndex) {
    if(startIndex!== undefined && (typeof startIndex !== 'number' || isNaN(startIndex)=== true)) throw new Error(`${startIndex} is not a valid number`)
    if(startIndex === undefined){
        for(let i = 0; i < this.length; i++){
            if(this[i] === element)
                return i
        }
        return -1
    }
    else if(startIndex >= 0 && startIndex < this.length){
        for(let i = startIndex; i < this.length; i++){
            if(this[i] === element)
                return i
        }
        return -1
    }
}