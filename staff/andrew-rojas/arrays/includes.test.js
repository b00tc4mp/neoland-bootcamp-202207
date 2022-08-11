describe('includes', function() {
  test('includes without index', function() {
      const fruits = ["Banana", "Orange", "Apple", "Mango"];

      const response = includes('Mango', fruits);
      check(response, true)
  })
  test('includes with index', function() {
      const fruits = ["Banana", "Orange", "Apple", "Mango"];

      const response = includes('Orange', 3, fruits);
      check(response, false)
  })
})