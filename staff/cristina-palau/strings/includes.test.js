describe('includes', function(){
    const phrase = 'the cat is under the table'
    
    test('on existing searchString', function() {
        check(includes(phrase, 'cat'), true)
    })

    test('on unexisting searchString', function() {
        check(includes(phrase, 'dog'), false)
    })
})