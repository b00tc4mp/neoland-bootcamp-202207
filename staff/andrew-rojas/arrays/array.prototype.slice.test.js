describe('slice', function() {
  test('slice starting from index', function() {
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

  test('slice starting at index and ending at indexes', function () {
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

    const result = animals.slice(2, 4)

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

  test('slice starting at index and ending at indexes (2)', function () {
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

    const result = animals.slice(1, 4)

    check(result.length, 3)
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

  test('slice starting at index and ending with negative count (1)', function () {
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

    const result = animals.slice(-2)

    check(result.length, 3)
    check(result[0], 'duck')
    check(result[1], 'elephant')

    check(animals.length, 5)
    check(animals[0], 'ant')
    check(animals[1], 'bison')
    check(animals[2], 'camel')
    check(animals[3], 'duck')
    check(animals[4], 'elephant')

  })

  test('slice starting at index and ending with negative count (2)', function () {
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

    const result = animals.slice(2, -1)

    check(result.length, 3)
    check(result[0], 'camel')
    check(result[1], 'duck')


    check(animals.length, 5)
    check(animals[0], 'ant')
    check(animals[1], 'bison')
    check(animals[2], 'camel')
    check(animals[3], 'duck')
    check(animals[4], 'elephant')

  })

  test('slice starting at index and ending with negative count (3)', function () {
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

    const result = animals.slice(2, -3)

    check(result.length, 0)
  

    check(animals.length, 5)
    check(animals[0], 'ant')
    check(animals[1], 'bison')
    check(animals[2], 'camel')
    check(animals[3], 'duck')
    check(animals[4], 'elephant')

  })

  test('slice starting at index and ending with negative count (3)', function () {
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

    const result = animals.slice()

    check(result.length, 5)
    check(animals[0], 'ant')
    check(animals[1], 'bison')
    check(animals[2], 'camel')
    check(animals[3], 'duck')
    check(animals[4], 'elephant')

    check(result=== animals, false)
  

    check(animals.length, 5)
    check(animals[0], 'ant')
    check(animals[1], 'bison')
    check(animals[2], 'camel')
    check(animals[3], 'duck')
    check(animals[4], 'elephant')

  })
})