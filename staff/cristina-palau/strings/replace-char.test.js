describe('replaceCharFunction', function () {
    test('hola mundo', function () {
        check(replaceChar('hola mundo', 'o', 'U'), 'hUla mundU')
    })

    test('numbers string', function () {
    check(replaceChar('0123456_89', '_', '7'), '0123456789')
    })

    test('hello world', function () {
        check(replaceChar('hell- w-rld', '-', 'o'), 'hello world')
    })

    })
