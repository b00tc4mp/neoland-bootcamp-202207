setTimeout(() => console.log('hola mundo'), 3000)

console.log('adios mundo')
// VM373:3 adios mundo
// undefined
// VM373:1 hola mundo


function setTimeoutPromise(millis) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, millis)
    })
}
// undefined
setTimeoutPromise(3000)
    .then(() => console.log('hola mundo'))

console.log('adios mundo')
// VM940:4 adios mundo
// undefined
// VM940:2 hola mundo