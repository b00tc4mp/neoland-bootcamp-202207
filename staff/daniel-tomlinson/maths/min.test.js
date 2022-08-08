// console.log(min(4, 1, 2, 4));
// // 1

// console.log(min(123, 456));
// // 123

// console.log(min(1, 2, 3, 0, 4, 5));
// // 0

describe("TEST: min", function () {
  test("min 1", function () {
    check(min(4, 1, 2, 4), 1);
  });
  test("min 123", function () {
    check(min(123, 456), 123);
  });
  test("min 0", function () {
    check(min(1, 2, 3, 0, 4, 5), 0);
  });
});
