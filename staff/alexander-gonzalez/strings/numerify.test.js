describe('numerify', function () {
    test('hello world', function () {
        check(numerify('hello world'), 'h3ll0 w0rld')
    })

    test('one two three four five', function () {
        check(numerify('one two three four five'), '0n3 tw0 thr33 f0ur f1v3')
    })

    test('murcielago', function () {
        check(numerify('murcielago'), 'murc13l4g0')
    })

    test('123', function () {
        check(numerify('123'), '123')
    })

    test('HELLO WORLD', function () {
        check(numerify('HELLO WORLD'), 'H3LL0 W0RLD')
    })

    test('MURCIELAGO', function () {
        check(numerify('MURCIELAGO'), 'MURC13L4G0')
    })

    test('mUrCIeLagO', function () {
        check(numerify('mUrCIeLagO'), 'mUrC13L4g0')
    })
})