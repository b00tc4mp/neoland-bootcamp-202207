// #1 - synchronous

/*
var a = 1

function b() {
    return 2
}

console.log(b())
console.log(a)
// 2
// 1
*/

// #2 - asynchronous

/*
var a = 1

function b() {
    return 2
}

setTimeout(function() {
    console.log(b())
}, 1000)
console.log(a)
// 1
// 2
*/

// #2 - asynchronous

var a = 1

function b() {
    setTimeout(function() {
        console.log(2)
    }, 1000)
}

b()
console.log(a)
// 1
// 2

