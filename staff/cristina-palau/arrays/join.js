function join(array, separator) {
    var result = ""
    var minArray = ""
    
    for (let i = 0; i < array.length; i++) {
        
        if (i < array.length - 1 && separator) 
            minArray = array[i] + separator
        
        else if (i < array.length - 1 && separator === undefined)
            minArray = array[i] + ','
         
        else
            minArray = array[i]

        result += minArray
    }
    return result
}

