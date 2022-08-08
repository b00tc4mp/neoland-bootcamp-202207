describe("TEST: every", function () {
  test("every less than 40", function () {
    const array1 = [1, 30, 39, 29, 10, 13, 40];
    const lessThan = 40;

    check(every(array1, lessThan), false);
  });
  test("every less than 40", function () {
    const array2 = [1, 30, 39, 29, 10, 13];
    const lessThan = 40;

    check(every(array2, lessThan), true);
  });
});
