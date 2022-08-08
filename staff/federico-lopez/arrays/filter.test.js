describe('filter', function() {
    test('filter pan family', function() {
        const people = [
            { name: 'Peter', surname: 'Pan', age: 15 },
            { name: 'James', surname: 'Hook', age: 40 },
            { name: 'Pepito', surname: 'Grillo', age: 50 },
            { name: 'Wendy', surname: 'Pan', age: 14 },
            { name: 'Pin', surname: 'Ocho', age: 8 }
        ]

        const pans = filter(people, function(person) {
            return person.surname === 'Pan'
        })

        check(pans.length, 2)
        check(pans[0], people[0])
        check(pans[1], people[3])
    })

    test('filter by age >= 18', function() {
        const people = [
            { name: 'Peter', surname: 'Pan', age: 15 },
            { name: 'James', surname: 'Hook', age: 40 },
            { name: 'Pepito', surname: 'Grillo', age: 50 },
            { name: 'Wendy', surname: 'Pan', age: 14 },
            { name: 'Pin', surname: 'Ocho', age: 8 }
        ]

        const olderThan18 = filter(people, function(person) {
            return person.age >= 18
        })

        check(olderThan18.length, 2)
        check(olderThan18[0], people[1])
        check(olderThan18[1], people[2])
    })
})