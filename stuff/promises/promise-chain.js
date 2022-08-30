function setTimeoutPromise(millis) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, millis)
    })
}

console.log('hola 0')

setTimeoutPromise(1000)
     .then(() => {
         console.log('hola 1')

         return setTimeoutPromise(2000)
     })
    .then(() => {
        console.log('hola 2')

         return setTimeoutPromise(3000)
    })
    .then(() => {
        console.log('hola 3')
    })
    .then(() => console.log('hola 5'))

console.log('hola 4')
// VM2257:7 hola 0
// VM2257:25 hola 4
// undefined
// VM2257:11 hola 1
// VM2257:16 hola 2
// VM2257:21 hola 3
// VM2257:23 hola 5