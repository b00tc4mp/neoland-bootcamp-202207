Cachay.prototype.filter = function filter(callback) {
    const filtered = new Cachay
    
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        const matches = callback(element)
        
        if (matches)
            filtered[filtered.length++] = element
    }
    
    return filtered;
}
