describe('countWords', function() {
    test ('Count Words', function(){
        check (countWords('adiós mundo cruel'),3)
    })
    test ('Count Words', function(){
        check (countWords('hello world'), 2)
    })
    test ('Count Numbers', function(){
        check (countWords('1 2 3 4 5'), 5)
    })
})


