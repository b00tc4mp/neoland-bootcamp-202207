var a = 1

function b() {
    setTimeout(function() {
        console.log(2, new Date)
    }, 1000)
}

function c() {
    var before = Date.now()

    while(Date.now() - before < 2000) {
        //console.log('wait')
    }

    console.log(3, new Date)
}

b()
c()
console.log(a, new Date)
// instrument.ts:129 3 Mon Jul 25 2022 12:42:05 GMT+0200 (Central European Summer Time)
// instrument.ts:129 1 Mon Jul 25 2022 12:42:05 GMT+0200 (Central European Summer Time)
// undefined
// instrument.ts:129 2 Mon Jul 25 2022 12:42:05 GMT+0200 (Central European Summer Time)