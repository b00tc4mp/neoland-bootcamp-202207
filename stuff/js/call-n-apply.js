var peter = { name: 'Peter' }
var wendy = { name: 'Wendy' }

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
// VM1600:5 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// VM1600:5 {name: 'Peter', printMe: ƒ}
// VM1600:5 {name: 'Wendy'}
// VM1600:5 {name: 'Wendy'}
// VM1600:17 Peter: hello, Wendy!
// VM1600:17 Wendy: ciao, Peter!
// VM1600:17 Wendy: ciao, Peter!