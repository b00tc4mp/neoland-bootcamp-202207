function min(a, b) {
    var minValue = min.arguments[0]
    for (var i = 1; i < min.arguments.length; i++) {

        if (minValue > min.arguments[i])
            minValue = min.arguments[i]

        else minValue = minValue
    }

    return minValue
}

// tests

console.log(min(4, 1))
// 1

console.log(min(123, 456))
// 123

console.log(min(1, 2, 3, 0, 4, 5)) // TODO learn about "js arguments"
// 0