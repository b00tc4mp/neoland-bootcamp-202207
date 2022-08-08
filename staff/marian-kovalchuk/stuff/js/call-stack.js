debugger // SEE inspector "Call Stack", USE "step" button in debugger

function a() {
    console.log(1)

    b()

    console.log(2)
}

function b() {
    console.log(3)

    c()

    console.log(4)
}

function c() {
    console.log(5)

    helloworld()

    console.log(6)
}

function helloworld() {
    console.log('hello world!')
}

a()
// VM1020:4 1
// VM1020:12 3
// VM1020:20 5
// VM1020:28 hello world!
// VM1020:24 6
// VM1020:16 4
// VM1020:8 2
// undefined