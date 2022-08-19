function concat(array, array2) {
    var newArray = []
    
    for (var i = 0; i < concat.arguments.length; i++) {
        for (var j = 0; j < concat.arguments[i].length; j++) {
            newArray[newArray.length] = concat.arguments[i][j]
           
        }
    }
    return newArray
}

// TODO ...


// tests

console.log(concat([1, 2], [3, 4, 5], [8, 7, 9]))
// [1, 2, 3, 4, 5]

console.log(concat(['h', 'o', 'l', 'a'], ['m', 'u', 'n', 'd', 'o']))
// ['h', 'o', 'l', 'a', 'm', 'u', 'n', 'd', 'o']

console.log(concat([1, 2], [3, 4], [5, 6]))
// [1, 2, 3, 4, 5, 6]