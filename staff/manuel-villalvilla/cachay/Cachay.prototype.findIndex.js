Cachay.prototype.findIndex = function findIndex(callback) {
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i])) {
                return i;
            }
        }
        return -1;
}

