describe('Slice', function () {
    test('slice starting from index', function () {
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
        const result = animals.slice(2)

        check(result.length, 3)
        check(result[0], 'camel')
        check(result[1], 'duck')
        check(result[2], 'elephant')

        check(animals.length, 5)
        check(animals[0], 'ant')
        check(animals[1], 'bison')
        check(animals[2], 'camel')
        check(animals[3], 'duck')
        check(animals[4], 'elephant')

    })
    test('slice starting and ending at indexes', function () {
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
        const result = animals.slice(2, 4)

        check(result.length, 2)
        check(result[0], 'camel')
        check(result[1], 'duck')

        check(animals.length, 5)
        check(animals[0], 'ant')
        check(animals[1], 'bison')
        check(animals[2], 'camel')
        check(animals[3], 'duck')
        check(animals[4], 'elephant')
    })
    test('slice starting and ending at indexes2', function () {
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
        const result = animals.slice(1, 5)

        check(result.length, 4)
        check(result[0], 'bison')
        check(result[1], 'camel')
        check(result[2], 'duck')
        check(result[3], 'elephant')

        check(animals.length, 5)
        check(animals[0], 'ant')
        check(animals[1], 'bison')
        check(animals[2], 'camel')
        check(animals[3], 'duck')
        check(animals[4], 'elephant')
    })
    test('slice starting with negtive count', function () {
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
        const result = animals.slice(-2)

        check(result.length, 2)
        check(result[0], 'duck')
        check(result[1], 'elephant')

        check(animals.length, 5)
        check(animals[0], 'ant')
        check(animals[1], 'bison')
        check(animals[2], 'camel')
        check(animals[3], 'duck')
        check(animals[4], 'elephant')
    })

    test('slice starting at index and ending with negtive count', function () {
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
        const result = animals.slice()

        check(result.length, 5)
        check(result[0], 'ant')
        check(result[1], 'bison')
        check(result[2], 'camel')
        check(result[3], 'duck')
        check(result[4], 'elephant')

        check(result !== animals, true)

        check(animals.length, 5)
        check(animals[0], 'ant')
        check(animals[1], 'bison')
        check(animals[2], 'camel')
        check(animals[3], 'duck')
        check(animals[4], 'elephant')
    })
    test('slice starting at index and ending with negtive count 3', function () {
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
        const result = animals.slice(2, -1)

        check(result.length, 2)
        check(result[0], 'camel')
        check(result[1], 'duck')

        check(animals.length, 5)
        check(animals[0], 'ant')
        check(animals[1], 'bison')
        check(animals[2], 'camel')
        check(animals[3], 'duck')
        check(animals[4], 'elephant')
    })
})