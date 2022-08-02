function Human(gender) {
    this.gender = gender
}

// Human.prototype = {} // new Object

Human.prototype.print = function() {
    console.log(`Human { gender: ${this.gender} }`)
}

Human.prototype
// {print: ƒ, constructor: ƒ}

peter = new Human('male')
anna = new Human('female')

peter.print()
anna.print()

console.log(peter.__proto__ === Human.prototype)
console.log(anna.__proto__ === Human.prototype)
console.log(peter.__proto__ === anna.__proto__)

// VM4862:9 Human { gender: male }
// VM4862:9 Human { gender: female }
// VM4862:18 true
// VM4862:19 true
// VM4862:20 true

peter
// Human {gender: 'male'}
anna
// Human {gender: 'female'}
peter.__proto__
// {print: ƒ, constructor: ƒ}
anna.__proto__
// {print: ƒ, constructor: ƒ}