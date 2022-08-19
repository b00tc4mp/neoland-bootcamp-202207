describe('joinFunction', function () {
    test('espace', function () {
        const elements = ['Fire', 'Air', 'Water']
        const separator = ' '

        const result = join(elements, separator)

        check(result, elements[0] + separator + elements[1] + separator + elements[2]);
    })
    test('no-espace', function () {
        const elements = ['Fire', 'Air', 'Water']
        const separator = ''

        const result = join(elements, separator)

        check(result, elements[0] + separator + elements[1] + separator + elements[2]);
    })

    test('minus', function () {
        const elements = ['Fire', 'Air', 'Water']
        const separator = '-'

        const result = join(elements, separator)

        check(result, elements[0] + separator + elements[1] + separator + elements[2]);
    })

    test('comma', function () {
        const elements = ['Fire', 'Air', 'Water']
        const separator = ','

        const result = join(elements, separator)

        check(result, elements[0] + separator + elements[1] + separator + elements[2]);
    })
})