Cachay.prototype.concat = function(...args){
    
    for(let i = 0; i < args.length; i++){
        for(let j = 0; j < args[i].length; j++){
            this[this.length++] = args[i][j]
            //De la manera de arriba, PRIMERO hace la operacion con el length, y luego hace el ++
            //this[this.length] = args[i][j]
            //this.length ++
        }
    }
    return this
}