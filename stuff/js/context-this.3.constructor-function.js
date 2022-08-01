var peter = new Person('Peter', 'Pan', 15)
var wendy = new Person('Wendy', 'Darling', 14)

function Person(name, surname, age) {
    this.name = name
    this.surname = surname
    this.age = age
}

// <name> <surname> (<age>)

Person.prototype.toString = function () {
    return `${this.name} ${this.surname} (${this.age})`
}

console.log(peter.toString())
console.log(wendy.toString())
// VM782:10 Peter Pan (15)
// VM782:11 Wendy Darling (14)
// undefined