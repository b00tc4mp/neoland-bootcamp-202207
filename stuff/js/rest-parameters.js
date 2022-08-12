// rest operator

function print(...args) {
    args.forEach(arg => console.log(arg))
}

print(1, 2, 3)
// VM4078:4 1
// VM4078:4 2
// VM4078:4 3
// undefined

print('a', 'b', 'c', 'd', 'e', 'f')
// VM4078:4 a
// VM4078:4 b
// VM4078:4 c
// VM4078:4 d
// VM4078:4 e
// VM4078:4 f
// undefined

function say(name, ...words) {
    console.log(name + ': ' + words.join() + '!')
}

say('Peter', 'omg', 'aka', 'wft')
// VM4691:2 Peter: omg,aka,wft!