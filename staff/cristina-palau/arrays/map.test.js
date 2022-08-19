describe('map', function () {
    test('multiply all the numbers in the array by 2', function () {
        const array1 = [1, 4, 9, 16]

        const map1 = map(array1, function (x) {
            return x * 2
        });

        check(array1.length, 4)
        check(array1[0], 1)
        check(array1[1], 4)
        check(array1[2], 9)
        check(array1[3], 16)

        check(map1 instanceof Array, true)
        // Verifico si map1 contiene la referencia a un array
        check(map1.length, 4)
        check(map1[0], 2)
        check(map1[1], 8)
        check(map1[2], 18)
        check(map1[3], 32)
    })

    test('increase prices a 20%', function () {
        const productsList = [
            { name: 'milk', price: 20 },
            { name: 'beer', price: 10 },
            { name: 'water', price: 30 },
            { name: 'sugar', price: 40 }
        ]

        const newProductsList = map(productsList, function (product) {
            return { name: product.name, price: product.price * 1.2 }
        })

        check(productsList instanceof Array, true)
        check(productsList.length, 4)
        check(productsList[0].price, 20)
        check(productsList[1].price, 10)
        check(productsList[2].price, 30)
        check(productsList[3].price, 40)

        check(newProductsList.length, 4)
        check(newProductsList[0].price, 24)
        check(newProductsList[1].price, 12)
        check(newProductsList[2].price, 36)
        check(newProductsList[3].price, 48)
    })
})