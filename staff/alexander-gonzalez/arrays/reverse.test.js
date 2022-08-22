describe('reverse', function(){

    test('reverse odd bunch of numbers', function(){
        const numbers = [1,2,3,4,5,6,7]
        const result = reverse(numbers)


        check(result, numbers)
        check(result.length, 7)
        check(result[0], 7)
        check(result[1], 6)
        check(result[2], 5)
        check(result[3], 4)
        check(result[4], 3)
        check(result[5], 2)
        check(result[6], 1)


    })


    test('reverse odd bunch of characters', function(){
        const chars = ['a','b','c','d','e','f']
        const result = reverse(chars)


        check(result, chars)
        check(result.length, 6)
        check(result[0], 'f')
        check(result[1], 'e')
        check(result[2], 'd' )
        check(result[3], 'c')
        check(result[4], 'b' )
        check(result[5], 'a')

    })

})