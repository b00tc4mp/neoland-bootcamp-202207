function setTimeoutPromise(millis) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, millis)
    })
}
undefined
console.log('hola 0')

setTimeoutPromise(1000)
     .then(() => {
         console.log('hola 1')

         return setTimeoutPromise(2000)
                    .then(() => {
                        console.log('hola 2')

                         return setTimeoutPromise(3000)
                                    .then(() => {
                                        console.log('hola 3')
                                    })
                    })
     })
    .then(() => console.log('hola 5'))

console.log('hola 4')
// VM1889:1 hola 0
// VM1889:19 hola 4
// undefined
// VM1889:5 hola 1
// VM1889:9 hola 2
// VM1889:13 hola 3
// VM1889:17 hola 5