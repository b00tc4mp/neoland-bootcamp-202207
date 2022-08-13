function concat(array, array2) {
    var result = []

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        // result.push(element)
        result[result.length]=element
    }

    for (var i = 0; i < array2.length; i++) {
        var element = array2[i]

        result.push(element)
    }

    return result
}

// tests

console.log('TEST concat')

console.log(concat([1, 2], [3, 4, 5]))
// [1, 2, 3, 4, 5]

console.log(concat(['h', 'o', 'l', 'a'], ['m', 'u', 'n', 'd', 'o']))
// ['h', 'o', 'l', 'a', 'm', 'u', 'n', 'd', 'o']

console.log(concat([1, 2], [3, 4], [5, 6]))
// [1, 2, 3, 4, 5, 6]