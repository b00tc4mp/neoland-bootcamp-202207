describe('arrayFilter', function () {
    test('filter Pan family', function () {
        const people = [
            { name: 'Peter', surname: 'Pan', age: 15 },
            { name: 'James', surname: 'Hook', age: 40 },
            { name: 'Pepito', surname: 'Grillo', age: 50 },
            { name: 'Wendy', surname: 'Pan', age: 14 },
            { name: 'Pin', surname: 'Ocho', age: 8 }
        ]

        const pans = people.filter(function (person) {
            return person.surname === 'Pan'
        })
        check(pans.length, 2)
        check(pans[0], people[0])
        check(pans[1], people[3])
    })
    test('filter by Age >=18', function () {
        const people = [
            { name: 'Peter', surname: 'Pan', age: 15 },
            { name: 'James', surname: 'Hook', age: 40 },
            { name: 'Pepito', surname: 'Grillo', age: 50 },
            { name: 'Wendy', surname: 'Pan', age: 14 },
            { name: 'Pin', surname: 'Ocho', age: 8 }
        ]
        const olderThan18 = people.filter(function (person) {
            return person.age >= 18
        })

        check(olderThan18.length, 2)
        check(olderThan18[0], people[1])
        check(olderThan18[1], people[2])
    })
    test('filter array of numers', function () {
        const numbers = [10, 28, 17, 14, 25, 64, 15, 13, 19]

        const more18 = numbers.filter(function (num) {
            return num >= 18
        })

        check(more18.length, 4)
        check(more18[0], numbers[1])
        check(more18[1], numbers[4])
        check(more18[2], numbers[5])
        check(more18[3], numbers[8])
    })
})
