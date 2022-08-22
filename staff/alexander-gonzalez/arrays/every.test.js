describe("every", function () {
  test("arrayOfNumbers", function () {
    var arrayOfNumbers = [9, 16, 39, 500];
    let element = 10
    every(element, arrayOfNumbers)
    check(every(10, arrayOfNumbers), true);
  });
});
