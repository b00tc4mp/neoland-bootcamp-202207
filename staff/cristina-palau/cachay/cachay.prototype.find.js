Cachay.prototype.find = function (callback) {
    for (let i = 0; i < this.length; i++) {
        let element = this[i]
        const meetsCondition = callback(element)

        if (meetsCondition) {
            return element
        }
    }
}