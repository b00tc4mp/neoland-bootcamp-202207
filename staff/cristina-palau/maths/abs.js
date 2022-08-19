function abs(value) {
// return value < 0? value *-1 : value

    var result = 0
    if (value < 0) {
        result = value * -1
    }
    return result
}

console.log(abs(2 - 7))
// 5

console.log(abs(2 * 10 * -9))
// 180

console.log(abs(1.2345 - 9.8765))
// 8.642