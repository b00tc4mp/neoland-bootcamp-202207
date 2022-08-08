function a() {
    'use strict'
    
    console.log(1, this)
    
    function b() {
        console.log(2, this)
    }

    b()
}

a()
window.a()


// VM359:4 1 undefined
// VM359:7 2 undefined

// VM359:4 1 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// VM359:7 2 undefined
// undefined