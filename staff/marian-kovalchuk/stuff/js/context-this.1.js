var peter = { name: 'Peter', surname: 'Pan', age: 15 }
var wendy = { name: 'Wendy', surname: 'Darling', age: 14 }

// <name> <surname> (<age>)

function toString(person) {
    return `${person.name} ${person.surname} (${person.age})`
}

console.log(toString(peter))
console.log(toString(wendy))
// VM782:10 Peter Pan (15)
// VM782:11 Wendy Darling (14)
// undefined