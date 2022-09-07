console.log(1)

console.log(2)

throw new Error(3)

console.log(4)
// VM882:1 1
// VM882:3 2
// VM882:5 Uncaught Error: 3
//     at <anonymous>:5:7