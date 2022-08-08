describe('TESTING lastIndexOf in arrays', function(){
    test('lastIndex from one array', function(){
        check(lastIndexOf('Apple', fruits), 5)
        check(lastIndexOf('Apple', 4, fruits), 3)
    })

    test('lastIndex from a word that DOES NOT EXIST', function(){
        check(lastIndexOf('Cherry', fruits), -1)
    })
})