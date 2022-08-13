describe('max', function () {
  test('4, 1', function() {
      check(max(4, 1), 4)
  })
  
  test('655, 456', function() {
      check(max(655, 456), 655)
  })
  
  test('1, 2, 3, 0, 4, 5', function() {
      check(max(1, 2, 3, 0, 4, 5), 5)
  })

  test('-1, -2, -3, -4, -5', function() {
    check(max(-1, -2, -3, -4, -5), -1)
  })

})



