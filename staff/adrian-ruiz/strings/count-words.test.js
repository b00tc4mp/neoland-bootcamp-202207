describe('TESTING CountWords', function(){
    test('Count words from a string',function(){
        check(countWords('adiós mundo cruel'),3)
        check(countWords('hello world'),2)
        check(countWords('1 2 3 4 5'),5)
        check(countWords('   123  123  '),2)
        check(countWords('    '),0)

    })
})