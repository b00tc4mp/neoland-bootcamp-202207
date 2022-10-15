describe('abs', function() {
    test ('Numbers +', function(){
        check (abs(2-7),5)
    })
    test ('abs', function(){
        check(abs(2 * 10 * -9),180)
    })
    test ('abs', function(){
        check (abs(1.2345 - 9.8765), 8.642)
    })
})


