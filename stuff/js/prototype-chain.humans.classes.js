class Human {
    constructor(gender, name) {
        this.gender = gender
        this.name = name
    }

    talk() { return this.gender === 'female' ? '🗣 iii' : '🗣 ooo' }
    eat() { return '🍔' }
    drink() { return '🍷' }
    pee() { return '💦' }
    poo() { return '💩' }
}

//var peter = new Human('male', 'Peter')
//var anna = new Human('female', 'Anna')

class Female extends Human {
    constructor(name) {
        super('female', name)
    }

    giveBirth() { return '👶🏻' }
}


class Male extends Human {
    constructor(name) {
        super('male', name)
    }

    giveSeed = function () { return '🌱' }
}

var anna = new Female('Anna')
var peter = new Male('Peter')

console.log(anna.talk())
console.log(peter.talk())

console.log(peter.giveSeed())
console.log(anna.giveBirth())

// VM14596:40 🗣 iii
// VM14596:41 🗣 ooo
// VM14596:43 🌱
// VM14596:44 👶🏻
// undefined
anna.giveSeed()
// VM14634:1 Uncaught TypeError: anna.giveSeed is not a function
//     at <anonymous>:1:6
// (anonymous) @ VM14634:1
peter.giveBirth()
// VM14681:1 Uncaught TypeError: peter.giveBirth is not a function
//     at <anonymous>:1:7
// (anonymous) @ VM14681:1
anna.poo()
// '💩'
peter.poo()
// '💩'