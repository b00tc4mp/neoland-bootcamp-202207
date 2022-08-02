Cachay.prototype.filter = function (callback) {
    
    const newArray = new Cachay;

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArray[newArray.length++] = this[i];
            
        }
    }
    return newArray;
    
}