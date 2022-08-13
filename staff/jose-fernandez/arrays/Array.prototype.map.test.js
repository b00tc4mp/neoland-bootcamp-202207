describe('Array.prototype.map', () => {
    test('map people to strings', () => {
        const people = [
            { name: 'Peter', surname: 'Pan', age: 15 },
            { name: 'James', surname: 'Hook', age: 40 },
            { name: 'Pepito', surname: 'Grillo', age: 50 },
            { name: 'Wendy', surname: 'Pan', age: 14 },
            { name: 'Pin', surname: 'Ocho', age: 8 }
        ]

        const toString = function(person) {
            return person.name + ' ' + person.surname + ' (' + person.age + ')'
        }

        const strings = people.map(toString)

        check(strings.length, people.length)
        check(strings[0], 'Peter Pan (15)')
        check(strings[1], 'James Hook (40)')
        check(strings[2], 'Pepito Grillo (50)')
        check(strings[3], 'Wendy Pan (14)')
        check(strings[4], 'Pin Ocho (8)')
    })

    test('map full names to uppercase', () => {
        const people = [
            { name: 'Peter', surname: 'Pan', age: 15 },
            { name: 'James', surname: 'Hook', age: 40 },
            { name: 'Pepito', surname: 'Grillo', age: 50 },
            { name: 'Wendy', surname: 'Pan', age: 14 },
            { name: 'Pin', surname: 'Ocho', age: 8 }
        ]

        const toUpperCase = function(person) {
            return person.name.toUpperCase() + ' ' + person.surname.toUpperCase()
        }

        const uppercases = people.map(toUpperCase)

        check(uppercases.length, people.length)
        check(uppercases[0], 'PETER PAN')
        check(uppercases[1], 'JAMES HOOK')
        check(uppercases[2], 'PEPITO GRILLO')
        check(uppercases[3], 'WENDY PAN')
        check(uppercases[4], 'PIN OCHO')
    })
})