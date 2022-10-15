describe('Numerify', function() {
    test ('Numerify', function(){
        check(numerify('hello world'),'H3ll0 W0rld')
    })
    test ('Numerify', function(){
        check(numerify('one two three four five'),'0n3 tW0 tHr33 f0ur f1v3')
    })
    test ('Numerify', function(){
        check(numerify('murcielago'),'murc13l4g0')
    })
    test ('Numerify', function(){
        check(numerify('HELLO WORLD'),'H3LL0 W0RLD')
    })
})  
