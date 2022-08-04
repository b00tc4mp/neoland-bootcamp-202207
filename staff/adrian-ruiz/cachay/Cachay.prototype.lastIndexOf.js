Cachay.prototype.lastIndexOf = function(word, indexStart){
    const fromStart = indexStart === undefined ? this.length-1 : indexStart
    for(let i = fromStart; i >= 0; i--){
        if(this[i] === word)
            return i
    }
    return -1
}