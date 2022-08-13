describe('pop', function () {
    test('one array with numbers', function () {
        const array = [0, 1, 2, 3]
        // creo newlength para guardar el tamaño del array inicial y luego compararlo
        const newlength = array.length

        const result = pop(array)

        check(array.length, newlength - 1)
        check(result, 3)
        check(array[0], 0)
        check(array[1], 1)
        check(array[2], 2)


    })

    test('one array with text', function () {
        const array = ['dog', 'cat', 'elephant']
        const result = pop(array)

        check(result, 'elephant')

    })

    test('one array with 0 items', function () {
        const array = []
        const result = pop(array)

        check(result, undefined)

    })

})
