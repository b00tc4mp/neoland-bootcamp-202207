function a() {
    console.log(1, this)
    
    function b() {
        console.log(2, this)
    }

    b()
}

a()

// VM257:2 1 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// VM257:5 2 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// undefined

window.a
// ƒ a() {
//     console.log(1, this)
    
//     function b() {
//         console.log(2, this)
//     }

//     b()
// }
window.b
// undefined
window.a.b
// undefined