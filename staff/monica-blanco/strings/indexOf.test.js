describe('IndexOf', function() {
    test ('IndexOf', function(){
        check(indexOf('hello world', 'a'),-1)
    })
    test ('IndexOf', function(){
        check(indexOf('hello world', 'o'), 4)
    })
    test ('IndexOf', function(){
        check(indexOf('Hello world, welcome to the universe','welcome'), 13)
    })
})