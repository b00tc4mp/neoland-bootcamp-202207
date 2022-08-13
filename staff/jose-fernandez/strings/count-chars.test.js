describe('count-chars', function () {
    test('hola mundo', function() {
        check(countChars('hola mundo'), 9)
    })
    
    test('hello world', function() {
        check(countChars('hello world'), 10)
    })
    
    test('1 2 3 4 5', function() {
        check(countChars('1 2 3 4 5'), 5)
    })
})
