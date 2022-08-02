Cachay.prototype.every = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) === false) {
            return false;
        }
    }
    return true;
}