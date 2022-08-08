describe('replaceChar', function(){
    test('hUla mundU', function(){
        check(replaceChar('hUla mundU'), 'hUla mundU')
    })

    test('0123456_89', '_', '7', function(){
        check(replaceChar('0123456_89', '_', '7'), '0123456789')
    })

    test('hell- w-rld', '-', 'o', function(){
        check(replaceChar('hell- w-rld', '-', 'o'), 'hello world')
    })


})


// tests

console.log(replaceChar('hola mundo', 'o', 'U'))
// hUla mundU

console.log(replaceChar('0123456_89', '_', '7'))
// 0123456789

console.log(replaceChar('hell- w-rld', '-', 'o'))
//hello world