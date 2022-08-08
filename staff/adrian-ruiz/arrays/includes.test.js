describe('TESTING includes array', function(){
    test('Check if an array includes a word',function(){
        check(includes('Mango', fruits),true)
        check(includes('Banana', 3, fruits), false)
    })
})