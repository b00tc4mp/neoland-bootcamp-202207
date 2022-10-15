describe('Includes', function() {
    test ('Includes', function(){
        check(includes('the cat is under the table','cat'),true)
    })
    test ('Includes', function(){
        check(includes('the cat is under the table','dog'), false)
    })
})  