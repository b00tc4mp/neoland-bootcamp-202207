describe('everyFunction', function () {
  test('arrayOfNumbers', function () {
      var arrayOfNumbers = [86, 45, 23, 77, 23, ];
      check(every(77, arrayOfNumbers), true);
  })
  test('arrayOfAnimals', function () {
      var arrayOfCars = ['ferrari', 'mercedes', 'redbull', 'williams'];
      check(every('mercedes', arrayOfCars), true);
  })

  test('arrayOfColors', function () {
      var arrayOfColors = ['green', 'purple', 'gray', 'yellow'];
      check(every('blue', arrayOfColors), false);
  })

})