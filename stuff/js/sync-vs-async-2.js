var a = 1

function b() {
    setTimeout(function() {
        console.log(2)
    }, 1000)
}

b()
console.log(a)


// instrument.ts:129 1 (1ms)
// undefined
// instrument.ts:129 2 (1000ms)