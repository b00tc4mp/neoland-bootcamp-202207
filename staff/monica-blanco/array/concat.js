function concat(array){
    debugger
    var result = []
    for (var i=0; i< array.length; i++){
        var argument = array[i]

        for (var j = 0; j < argument.length; j++){
            var element = argument[j]
            //result.push (element)
            result[result.length]= element
        }
    }
    return result
}

//const arrayOfArrays = [[1, 2], [3, 4], [5, 6]]
// // tests

// console.log('TEST concat')

// console.log(concat([1, 2], [3, 4, 5]))
// // [1, 2, 3, 4, 5]

// console.log(concat(['h', 'o', 'l', 'a'], ['m', 'u', 'n', 'd', 'o']))
// // ['h', 'o', 'l', 'a', 'm', 'u', 'n', 'd', 'o']

console.log (concat(arrayOfArrays))
// // [1, 2, 3, 4, 5, 6]

// console.log(concat([1, 2], [3, 4], [5, 6], [7, 8]))
// // [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(concat([1, 2], [3, 4], [5, 6], [7, 8], [9, 10]))
// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]