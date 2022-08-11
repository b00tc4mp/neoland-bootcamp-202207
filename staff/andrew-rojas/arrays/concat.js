function concat() {
    // TODO ...
    var result = []


    for (var i = 0; i < arguments.length; i++) {
        var argument = arguments[i]

        for (var j = 0; j < argument.length; j++) {
            var element = argument[j]

            // result.push(element)
            result[result.length] = element
        } 
    }

    return result

}

// tests

console.log(concat([1, 2], [3, 4, 5]))
// [1, 2, 3, 4, 5]

console.log(concat(['h', 'o', 'l', 'a'], ['m', 'u', 'n', 'd', 'o']))
// ['h', 'o', 'l', 'a', 'm', 'u', 'n', 'd', 'o']

console.log(concat([1, 2], [3, 4], [5, 6]))
// [1, 2, 3, 4, 5, 6]


// var result=""

// for (var i=0; i < concat.arguments.length; i++){
//    for (var j=0; j < concat.arguments[i].length; j++ ) { result+= concat.arguments[i][j]

//    }
//    return result
// }

// {
//     // TODO ...
//     var result = []

//     for (var i = 0; i < array.length; i++) {
//         var element = array [i]

//         result.push(element)
//     }

//     for (var i = 0; i < array2.length; i++) {
//         var element = array2 [i]

//         result.push(element)
//     }

//     return result


// }