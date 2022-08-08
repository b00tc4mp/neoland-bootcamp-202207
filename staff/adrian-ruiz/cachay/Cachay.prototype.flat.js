Cachay.prototype.flat = function(depth){
    var result = new Cachay()
    
    if(depth){
        result = this
        for(let i = 0; i < depth; i++){
            var tempResult = result
            result = result.flat()
            if(JSON.stringify(tempResult) === JSON.stringify(result)) // Stringify para comprobar si los 2 "objetos" tienen el mismo contenido para comprobar que son "lo mismo"
                break
        }      
    }

    if (depth === undefined){
        for(let i = 0; i < this.length; i++){
            if(this[i].length){
                for(let j = 0; j < this[i].length; j++)
                    result[result.length++] = this[i][j]
            }else
            result[result.length++] = this[i]
        }
    }
    return result
}