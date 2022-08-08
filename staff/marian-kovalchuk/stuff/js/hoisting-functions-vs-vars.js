// #1

/*
fun()

function fun() { console.log('...') } // hoisting (declaration + definition)
*/

// #2

/*
fun()

var fun // hoisting (declaration)

fun = function() { console.log('...') } // (definition)
*/

// equal to

var fun

fun()

fun = function() { console.log('...') }

// VM2970:23 Uncaught TypeError: fun is not a function
//     at <anonymous>:23:1
// (anonymous) @ VM2970:23