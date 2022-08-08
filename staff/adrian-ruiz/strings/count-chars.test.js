describe('TESTING Count Chars' , function(){
    test('Count chars from a string', function(){
        check(countChars('hola mundo'), 10)
        check(countChars('hello world'), 11)
        check(countChars('1 2 3 4 5'), 9)
    })
})
