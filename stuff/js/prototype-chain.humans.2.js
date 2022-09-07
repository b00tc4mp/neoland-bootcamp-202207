function Human(gender, name) { 
    this.gender = gender 
    this.name = name
}

Human.prototype.talk = function() { return this.gender === 'female'? '🗣 iii' : '🗣 ooo' }
Human.prototype.eat = function() { return '🍔' }
Human.prototype.drink = function() { return '🍷' }
Human.prototype.pee = function() { return '💦' }
Human.prototype.poo = function() { return '💩' }

//var peter = new Human('male', 'Peter')
//var anna = new Human('female', 'Anna')

function Female(name) {
    Human.call(this, 'female', name)
}

//Female.prototype = Human.prototype
//Female.prototype = new Human
Female.prototype = Object.create(Human.prototype)
Female.prototype.constructor = Female

Female.prototype.giveBirth = function() { return '👶🏻' }


function Male(name) {
    Human.call(this, 'male', name)
}

//Male.prototype = Human.prototype
Male.prototype = Object.create(Human.prototype)
Male.prototype.constructor = Male

Male.prototype.giveSeed = function() { return '🌱' }

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