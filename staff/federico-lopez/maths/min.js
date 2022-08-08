function min(a, b) {
    if (a < b)
        return a
    else
        return b
}

// tests

console.log(min(4, 1))
// 1

console.log(min(123, 456))
// 123

console.log(min(1, 2, 3, 0, 4, 5)) // TODO learn about "js arguments"
// 0