/*
async function add(a, b) {
    return a + b
}
*/

function add(a, b) {
    return new Promise((resolve, reject) => resolve(a + b))
}

const result = add(1, 2)
console.log(result)

// VM810:12 Promise {<fulfilled>: 3}