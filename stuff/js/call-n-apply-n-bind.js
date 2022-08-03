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

function writeEmail(to, subject, body) {
    return `

===================================================
from: ${this.name}
to: ${to.name}
---------------------------------------------------
subject: ${subject}
---------------------------------------------------
body: ${body}
===================================================

`
}

peter.writeEmail = writeEmail
const email = peter.writeEmail(wendy, 'i ❤️ ü', `i miss you so much, you are the light of my life... 
i have so much pain when you are not here
i dunno how to survive, my darling, i dunno how to be alone...
i am thinking of... taking some pills to sleep until you arrive
i am not depressed, but i look like that
i want you to understand me
i am not selfish
i am just out myself
i i i i and i
and only i...
see you soon... do you miss me right!? right!???? please, answerr!!!!!`)
console.log(email)

const wendyEmail = writeEmail.bind(wendy)
const email2 = wendyEmail(james, 'wtf!', `look what Peter has just wrote me!
${email}`)
console.log(email2)
const email3 = wendyEmail(peter, 'let me see...', `where can i start from... 
modafoca!!! you egoist!!!! ... 
you made me suffer so much, and now you miss me!!!!
...
#@$!!!!`)
console.log(email3)

// VM53:6 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// VM53:6 {name: 'Peter', printMe: ƒ}
// VM53:6 {name: 'Wendy'}
// VM53:6 {name: 'Wendy'}
// VM53:18 Peter: hello, Wendy!
// VM53:18 Wendy: ciao, Peter!
// VM53:18 Wendy: ciao, Peter!
// VM53:18 Wendy: hola, James!
// VM53:18 Wendy: ciao, Peter!
// VM53:18 Wendy: hola, James!
// VM53:18 Wendy: ciao, Peter!
// VM53:18 Wendy: hola, James!
// VM53:70 

// ===================================================
// from: Peter
// to: Wendy
// ---------------------------------------------------
// subject: i ❤️ ü
// ---------------------------------------------------
// body: i miss you so much, you are the light of my life... 
// i have so much pain when you are not here
// i dunno how to survive, my darling, i dunno how to be alone...
// i am thinking of... taking some pills to sleep until you arrive
// i am not depressed, but i look like that
// i want you to understand me
// i am not selfish
// i am just out myself
// i i i i and i
// and only i...
// see you soon... do you miss me right!? right!???? please, answerr!!!!!
// ===================================================


// VM53:75 

// ===================================================
// from: Wendy
// to: James
// ---------------------------------------------------
// subject: wtf!
// ---------------------------------------------------
// body: look what Peter has just wrote me!


// ===================================================
// from: Peter
// to: Wendy
// ---------------------------------------------------
// subject: i ❤️ ü
// ---------------------------------------------------
// body: i miss you so much, you are the light of my life... 
// i have so much pain when you are not here
// i dunno how to survive, my darling, i dunno how to be alone...
// i am thinking of... taking some pills to sleep until you arrive
// i am not depressed, but i look like that
// i want you to understand me
// i am not selfish
// i am just out myself
// i i i i and i
// and only i...
// see you soon... do you miss me right!? right!???? please, answerr!!!!!
// ===================================================


// ===================================================


// VM53:81 

// ===================================================
// from: Wendy
// to: Peter
// ---------------------------------------------------
// subject: let me see...
// ---------------------------------------------------
// body: where can i start from... 
// modafoca!!! you egoist!!!! ... 
// you made me suffer so much, and now you miss me!!!!
// ...
// #@$!!!!
// ===================================================


// undefined