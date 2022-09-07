var peter = { name: 'Peter', surname: 'Pan', age: 15 }
var wendy = { name: 'Wendy', surname: 'Darling', age: 14 }

// <name> <surname> (<age>)

function toString() {
    return `${this.name} ${this.surname} (${this.age})`
}

peter.toString = toString
wendy.toString = toString

console.log(peter.toString())
console.log(wendy.toString())
// VM782:10 Peter Pan (15)
// VM782:11 Wendy Darling (14)
// undefined