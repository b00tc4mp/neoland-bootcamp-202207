Cachay.prototype.concat = function (...values) {

    let result = {}
    result.length = 0;
    for (let i = 0; i < this.length; i++) {
        result[i] = this[i]
        result.length++;
    }
    for (let i = 0; i < values.length; i++) {
        let  argument = values[i]
        for (let j = 0; j < values[i].length; j++) {
            let element = argument[j]
            result[result.length] = element
            result.length++;
            
        }
    }
    return result
}
