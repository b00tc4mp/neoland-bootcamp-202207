var peter = { name: 'Peter' }
var wendy = { name: 'Wendy' }
var james = { name: 'James' }

function printMe() {
    console.log(this)
}

printMe() // window.printMe()

peter.printMe = printMe
peter.printMe()

printMe.call(wendy)
printMe.apply(wendy)

function salute(salutation, to) {
    console.log(`${this.name}: ${salutation}, ${to.name}!`)
}

peter.salute = salute
peter.salute('hello', wendy)

salute.call(wendy, 'ciao', peter)
salute.apply(wendy, ['ciao', peter])

salute.call(wendy, 'hola', james)

const wendySalute = salute.bind(wendy)
wendySalute('ciao', peter)
wendySalute('hola', james)

function bind(fn, ctx) {
    return function() {
        fn.apply(ctx, arguments)
    }
}

const wendySalute2 = bind(salute, wendy)
wendySalute2('ciao', peter)
wendySalute2('hola', james)

// VM2946:6 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// VM2946:6 {name: 'Peter', printMe: ƒ}
// VM2946:6 {name: 'Wendy'}
// VM2946:6 {name: 'Wendy'}
// VM2946:18 Peter: hello, Wendy!
// VM2946:18 Wendy: ciao, Peter!
// VM2946:18 Wendy: ciao, Peter!
// VM2946:18 Wendy: hola, James!
// VM2946:18 Wendy: ciao, Peter!
// VM2946:18 Wendy: hola, James!
// VM2946:18 Wendy: ciao, Peter!
// VM2946:18 Wendy: hola, James!
