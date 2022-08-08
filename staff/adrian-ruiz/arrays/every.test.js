describe('TESTING every arrays',function(){
    test('Check age in one number array', function(){
        check(every(checkAge1, arrayOfNumbers),true)
        check(every(checkAge2, arrayOfNumbers),false)
    })
})