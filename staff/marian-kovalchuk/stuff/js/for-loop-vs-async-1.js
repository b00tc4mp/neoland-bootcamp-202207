var before = Date.now() // [...][now]

for (var i = 1; i < 11; i++) // [...]
    setTimeout(() => console.log(i, Date.now() - before + 'ms'), 1000) // [...][setTimeout]

console.log('hola mundo') // [...][.log]

// VM2047:6 hola mundo // [...][.log]
// undefined
// VM2047:4 11 '1002ms' // [callback (1)][.log]
// VM2047:4 11 '1003ms' // [callback (2)][.log]
// VM2047:4 11 '1003ms' // [callback (3)][.log]
// VM2047:4 11 '1003ms' // ...
// VM2047:4 11 '1003ms'
// VM2047:4 11 '1003ms'
// VM2047:4 11 '1003ms'
// VM2047:4 11 '1003ms'
// VM2047:4 11 '1003ms'
// VM2047:4 11 '1003ms' // [callback (10)][.log]