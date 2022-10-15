function mini() {
    var peque = arguments[0]
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] < peque)
            peque = arguments[i]
    } return peque
}

console.log(mini(4, 1))
console.log(mini(123, 456))

console.log(mini(1, 2, 3, 0, 4, 5))