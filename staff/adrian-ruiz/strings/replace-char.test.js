// tests
describe('TESTING replaceChar',function(){
    test('Replace Chars from a string', function(){
        check(replaceChar('hola mundo', 'o', 'U'),'hUla mundU')
        check(replaceChar('0123456_89', '_', '7'),'0123456789')
        check(replaceChar('hell- w-rld', '-', 'o'),'hello world')
    })
})
