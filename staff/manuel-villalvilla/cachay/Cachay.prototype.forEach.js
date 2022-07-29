Cachay.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') {
        throw new TypeError (callback + ' is not a function'); // error de tipado
    }
    for (var i = 0; i < this.length; i++) {
        callback(this[i]);
    }
    return undefined;
}