function max() {
    let result = arguments[0]
    
    for (let i = 1; i < arguments.length; i++) {
        const element = arguments[i]

        if (element > result)
            result = element
    }

    return result
}

// tests

console.log('TEST max')

console.log(max(4, 1))
// 4

console.log(max(123, 456))
// 456

console.log(max(1, 2, 3, 0, 4, 5))
// 5

console.log(max(-10, -8, -7))
// -7