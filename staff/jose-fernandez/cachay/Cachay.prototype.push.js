Cachay.prototype.push = function (...args) {
    
    for (let i = 0; i < args.length; i++) {
        const element = args[i]
        this[this.length++] = element
    }
    return this.length
}