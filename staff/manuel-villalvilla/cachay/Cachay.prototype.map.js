Cachay.prototype.map = function(callback) {
    let newArray = new Cachay;
    for (var i = 0; i < this.length; i++) {
        newArray[newArray.length++] = callback(this[i]); // no puedo usar newArray[i] porque hay q construir el newArray con el length
        // newArray.length++ Esta linea la omito porque he puesto el ++ arriba
    }
    return newArray;
}