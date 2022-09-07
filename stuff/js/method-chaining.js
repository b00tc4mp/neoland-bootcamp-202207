const people = [
    { name: 'Peter', surname: 'Pan', age: 15 },
    { name: 'James', surname: 'Hook', age: 40 },
    { name: 'Pepito', surname: 'Grillo', age: 50 },
    { name: 'Wendy', surname: 'Pan', age: 14 },
    { name: 'Pin', surname: 'Ocho', age: 8 }
]


function olderThan18(person) {
    return person.age > 17
}

const toUpperCase = function(person) {
    return person.name.toUpperCase() + ' ' + person.surname.toUpperCase()
}


people.filter(olderThan18).map(toUpperCase).join(', ') // method chaining
// 'JAMES HOOK, PEPITO GRILLO'