function concat(array, array2) {
    // TODO ...
    
    var newArray = []
    var x = 0;
    for(let i = 0; i < arguments.length; i++){

        for(let j = 0; j < arguments[i].length; j++){
        newArray[x] = arguments[i][j]
        x++;
        }
        
    }
    return newArray
    
}


// tests

console.log(concat([1, 2], [3, 4, 5]))
// [1, 2, 3, 4, 5]

console.log(concat(['h', 'o', 'l', 'a'], ['m', 'u', 'n', 'd', 'o']))
// ['h', 'o', 'l', 'a', 'm', 'u', 'n', 'd', 'o']

console.log(concat([1, 2], [3, 4], [5, 6]))
// [1, 2, 3, 4, 5, 6]^
