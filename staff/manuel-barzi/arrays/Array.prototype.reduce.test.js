describe('Array.prototype.reduce', function () {
    test('calculate total price', function () {
        const cart = [
            { name: 'Socks', price: 15, qty: 2 },
            { name: 'Jeans', price: 40, qty: 1 },
            { name: 'Shirt', price: 50, qty: 4 },
            { name: 'Shoes', price: 14, qty: 2 },
            { name: 'Jacket', price: 8, qty: 1 }
        ]

        const total = cart.reduce((accum, item) => accum + item.price * item.qty, 0)

        check(typeof total === 'number', true) 
        check(total, 306)
    })

    test('count people older than 21', function() {
        const people = [
            { name: 'Peter', surname: 'Pan', age: 15 },
            { name: 'James', surname: 'Hook', age: 40 },
            { name: 'Pepito', surname: 'Grillo', age: 50 },
            { name: 'Wendy', surname: 'Pan', age: 14 },
            { name: 'Pin', surname: 'Ocho', age: 8 }
        ]

        const moreThan21 = people.reduce(function(accum, person) {
            return person.age > 21? accum + 1 : accum
        }, 0)

        check(typeof moreThan21 === 'number', true) 
        check(moreThan21, 2)
    })

    test('extract statistics', function() {
        const people = [
            { name: 'Peter', surname: 'Pan', age: 15 },
            { name: 'James', surname: 'Hook', age: 40 },
            { name: 'Pepito', surname: 'Grillo', age: 50 },
            { name: 'Wendy', surname: 'Pan', age: 14 },
            { name: 'Pin', surname: 'Ocho', age: 8 }
        ]

        const stats = people.reduce(function(accum, person) {
            if (person.age > 18)
                accum.adults++
            else
                accum.minors++

            return accum
        }, { adults: 0, minors: 0 })


        check(typeof stats === 'object', true)
        check(stats.adults, 2)
        check(stats.minors, 3)
    })
})