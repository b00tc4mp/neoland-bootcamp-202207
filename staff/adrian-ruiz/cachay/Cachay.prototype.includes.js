Cachay.prototype.includes = function(word, indexStart){
    if(!indexStart){
        for(let i = 0; i < this.length; i++){
            if(this[i] === word)
                return true
        }
        return false
    }
    else if(indexStart < this.length && indexStart >= 0){
        for(let i = indexStart; i < this.length; i++){
            if(this[i] === word)
                return true
        }
        return false
    }
    else if(indexStart < 0){
        
        const fromIndex = (this.length + indexStart) < 0 ? 0 : this.length + indexStart

        for(let i = fromIndex; i < this.length; i++ ){
            if(this[i] === word)
                return true
        }
        return false
    }
    else if(indexStart >= this.length)
        return false
}