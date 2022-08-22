describe('join', function() {
    test('join with spaces', function(){
        const elements=['Fire', 'Air', 'Water', 'Earth']
        const separator=' '

        const result = join(elements, separator)
        check(result, elements[0] + separator +elements[1] + separator + elements[2]+ separator+elements[3])

    })

    test('join with dash', function(){
        const elements=['Fire', 'Air', 'Water', 'Earth']
        const separator='-'

        const result = join(elements, separator)
        check(result, elements[0] + separator +elements[1] + separator + elements[2]+ separator+elements[3])
        
    })

    test('join with default separator', function(){
        const elements=['Fire', 'Air', 'Water', 'Earth']
        const separator=','

        const result = join(elements)
        check(result, elements[0] + separator +elements[1] + separator + elements[2]+ separator+elements[3])
        
    })




})