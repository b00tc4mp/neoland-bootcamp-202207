describe('replace-char', function () {    
    test('hola mundo : o => U', function() {
        check(replaceChar('hola mundo', 'o', 'U'), 'hUla mundU')
    })
    
    test('0123456_89 : _ => 7', function() {
        check(replaceChar('0123456_89', '_', '7'), '0123456789')
    })

    test('hell- w-rld : - => o', function() {
        check(replaceChar('hell- w-rld', '-', 'o'), 'hello world')
    })
})

