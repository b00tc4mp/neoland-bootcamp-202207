Cachay.prototype.includes = function (searchElement) {
    for (let i = 0; i < this.length; i++) {

        let element = this[i];

        if (element === searchElement) {
            return true
        }
    }
    return false
}

