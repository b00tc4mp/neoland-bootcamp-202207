
function setTimeoutPromise(millis) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, millis)
    })
}

console.log('hola 0')

setTimeoutPromise(1000)
     .then(() => {
         console.log('hola 1')

         //return setTimeoutPromise(2000)
         setTimeoutPromise(2000) // it does not wait now (the next promise)
     })
    .then(() => {
        console.log('hola 2')

         //return setTimeoutPromise(3000)
        setTimeoutPromise(3000) // it does not wait now (the next promise)
    })
    .then(() => {
        console.log('hola 3')
    })
    .then(() => console.log('hola 5'))

console.log('hola 4')
// VM2581:7 hola 0
// VM2581:27 hola 4
// undefined
// VM2581:11 hola 1
// VM2581:17 hola 2
// VM2581:23 hola 3
// VM2581:25 hola 5