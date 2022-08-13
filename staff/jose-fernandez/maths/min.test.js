describe('min', function () {
  test('4, 1', function() {
      check(min(4, 1), 1)
  })
  
  test('123, 456', function() {
      check(min(123, 456), 123)
  })
  
  test('1, 2, 3, 0, 4, 5', function() {
      check(min(1, 2, 3, 0, 4, 5), 0)
  })


})

