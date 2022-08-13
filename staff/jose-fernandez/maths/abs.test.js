describe('abs', function () {
    test('9 - 7', function() {
        check(abs(9 - 7), 2)
    })
    
    test('2 * 10 * -9', function() {
        check(abs(2 * 10 * -9), 180)
    })
    
    test('1.2345 - 9.8765', function() {
        check(abs(1.2345 - 9.8765), 8.642)
    })
})

