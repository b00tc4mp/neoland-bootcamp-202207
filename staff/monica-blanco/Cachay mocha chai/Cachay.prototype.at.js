// devuelve una posición de array

Cachay.prototype.at = function (pos){
    if (pos>0 && pos < this.length ){
        return this[pos]
    }
    else if (pos < 0 && -pos< this.length){
        return this[length+pos]
    }
}