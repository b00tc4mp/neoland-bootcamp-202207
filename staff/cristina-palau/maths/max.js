function max(a, b) {
    var maxValue = max.arguments[0]
    for (var i = 1; i < max.arguments.length; i++) {

        if (maxValue < max.arguments[i])
            maxValue = max.arguments[i]

        // else maxValue = maxValue
    }

    return maxValue
}

// tests

console.log(max(4, 1))
// 4

console.log(max(123, 456))
// 456

console.log(max(1, 8, 3, 0, 4, 5))
// 5

