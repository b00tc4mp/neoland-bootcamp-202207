[1, 2, 3].forEach()
// VM43:1 Uncaught TypeError: undefined is not a function
//     at Array.forEach (<anonymous>)
//     at <anonymous>:1:11
// (anonymous) @ VM43:1

// #1

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i]

        callback(element)
    }
}

forEach([1, 2, 3])
// VM87:5 Uncaught TypeError: callback is not a function
//     at forEach (<anonymous>:5:9)
//     at <anonymous>:9:1
// forEach @ VM87:5
// (anonymous) @ VM87:9

// #2

function forEach(array, callback) {
    if (typeof callback !== 'function') 
        throw new TypeError(callback + ' is not a function')
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i]

        callback(element)
    }
}

forEach([1, 2, 3])
// VM381:3 Uncaught TypeError: undefined is not a function
//     at forEach (<anonymous>:3:15)
//     at <anonymous>:12:1
// forEach @ VM381:3
// (anonymous) @ VM381:12

// #3

function mul(a, b) {
    if (typeof a !== 'number')
        throw new TypeError('a is not a number')

    if (typeof b !== 'number')
        throw new TypeError('b is not a number')
    
    return a * b
}

//mul(1, 2)
mul(1, 'mundo')

// VM1972:6 Uncaught TypeError: b is not a number
//     at mul (<anonymous>:6:15)
//     at <anonymous>:12:1

// #4

function mul(a, b) {
    if (isNaN(a) || !isFinite(a))
        throw new TypeError('a is not a number')

    if (isNaN(b) || !isFinite(b))
        throw new TypeError('b is not a number')
    
    return a * b
}

//mul(1, 2)
mul(1, 'mundo')
//mul(NaN, NaN)
//mul(Infinity, 1)

// VM3428:6 Uncaught TypeError: b is not a number
//     at mul (<anonymous>:6:15)
//     at <anonymous>:12:1