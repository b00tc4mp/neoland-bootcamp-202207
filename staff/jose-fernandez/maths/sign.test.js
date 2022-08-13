describe('sign', function () {
    test('3', function() {
        check(sign(3), 1)
    })
    
    test('-3', function() {
        check(sign(-3), -1)
    })
    
    test('0', function() {
         check(sign(0), 0)
     })

    test('("-3")', function() {
        check(sign('-3'), -1)
    })
  
  
})
