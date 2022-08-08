Cachay.prototype.reverse = function(...values) {
    
    for ( let i = 0 ; i < values.length/2; i++ ){
    const temp = values[i]
    const reerIndex  = values.length-1-i
    values[i] = values[reerIndex]
    values[reerIndex] = temp 
    }
    return values
    }