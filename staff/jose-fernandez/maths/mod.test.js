describe('mod', function () {
    test('10, 2', function() {
        check(mod(10, 2), 0)
    })
    
    test('3, 2', function() {
        check(mod(3, 2), 1)
    })
    
    test('11, 3', function() {
        check(mod(11, 3), 2)
    })
  
  
  })
  