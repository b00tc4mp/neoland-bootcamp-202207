Cachay.prototype.concat = function (...arrays) {
    var newArray = new Cachay;

    for (let i = 0; i < this.length; i++) {
        newArray[newArray.length++] = this[i];
    }
    
    for (let j = 0; j < arrays.length; j++) {
        for (let z = 0; z < arrays[j].length; z++) { 
            newArray[newArray.length++] = arrays[j][z];
        }
    }
    return newArray;
}