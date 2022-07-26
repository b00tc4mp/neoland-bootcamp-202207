var before = Date.now()

//for (var i = 1; i < 11; i++)
var i = 1;

(function printI() {
    setTimeout(() => {
        console.log(i, Date.now() - before + 'ms')

        i++

        if (i < 11)
            printI()
    }, 1000)
})() // IIFE


console.log('hola mundo')

// VM853:18 hola mundo
// undefined
// VM853:8 1 '1005ms'
// VM853:8 2 '2009ms'
// VM853:8 3 '3013ms'
// VM853:8 4 '4017ms'
// VM853:8 5 '5022ms'
// VM853:8 6 '6026ms'
// VM853:8 7 '7030ms'
// VM853:8 8 '8034ms'
// VM853:8 9 '9039ms'
// VM853:8 10 '10043ms'
i
// 11