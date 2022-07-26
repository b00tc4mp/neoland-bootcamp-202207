var stack = []

stack.push('...')
printStack()

function printStack() {
    //console.clear()

    var inline = stack.reduce((accum, func) => accum + '[' + func + ']', '')

    console.log(inline)

    block(1000)
}

function block(millis) {
    var before = Date.now()

    while(Date.now() - before < millis);
}

function a() {
    stack.push('.log')
    printStack()
    console.log('A')
    stack.pop()

    stack.push('b')
    printStack()
    b()
    stack.pop()
}

function b() {
    stack.push('.log')
    printStack()
    console.log('B')
    stack.pop()

    stack.push('c')
    printStack()
    c()
    stack.pop()
}

function c() {
    stack.push('.log')
    printStack()
    console.log('C')
    stack.pop()

    // to provoke an infinite call stack uncomment the following lines
    /*
    stack.push('a')
    printStack()
    a()
    stack.pop()
    */
}

stack.push('.log')
printStack()
console.log('hola mundo')
stack.pop()

stack.push('a')
printStack()
a()
stack.pop()

console.log('the end')

// Script snippet #17:11 [...]
// Script snippet #17:11 [...][.log]
// Script snippet #17:63 hola mundo
// Script snippet #17:11 [...][a]
// Script snippet #17:11 [...][a][.log]
// Script snippet #17:25 A
// Script snippet #17:11 [...][a][b]
// Script snippet #17:11 [...][a][b][.log]
// Script snippet #17:37 B
// Script snippet #17:11 [...][a][b][c]
// Script snippet #17:11 [...][a][b][c][.log]
// Script snippet #17:49 C
// Script snippet #17:71 the end
// Script snippet #17:1 undefined