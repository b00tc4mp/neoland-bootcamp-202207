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
// VM607:5 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// VM607:5 {name: 'Peter', printMe: ƒ}
// VM607:5 {name: 'Wendy'}
// VM607:5 {name: 'Wendy'}