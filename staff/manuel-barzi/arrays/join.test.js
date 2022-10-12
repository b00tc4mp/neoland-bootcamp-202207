describe('join', function() {
    test('joins with space', function() {
        const elements = ['Fire', 'Air', 'Water', 'Earth']
        const separator = ' '

        const result = join(elements, separator)

        check(result, elements[0] + separator + elements[1] + separator + elements[2] + separator + elements[3])
    })

    test('joins with empty', function() {
        const elements = ['Fire', 'Air', 'Water', 'Earth']
        const separator = ''

        const result = join(elements, separator)

        check(result, elements[0] + separator + elements[1] + separator + elements[2] + separator + elements[3])
    })
    
    test('joins with dash', function() {
        const elements = ['Fire', 'Air', 'Water', 'Earth']
        const separator = '-'

        const result = join(elements, separator)

        check(result, elements[0] + separator + elements[1] + separator + elements[2] + separator + elements[3])
    })
    

    test('joins with default separator', function() {
        const elements = ['Fire', 'Air', 'Water', 'Earth']
        const separator = ','

        const result = join(elements)

        check(result, elements[0] + separator + elements[1] + separator + elements[2] + separator + elements[3])
    })
})
