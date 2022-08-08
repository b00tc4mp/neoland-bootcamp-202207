// demos

describe("TEST: max", function () {
  test("max 4", function () {
    check(max(4, 1), 4);
  });
  test("max 456", function () {
    check(max(123, 456), 456);
  });
  test("max 5", function () {
    check(max(1, 2, 3, 0, 4, 5), 5);
  });
});

// console.log(max(4, 1));
// // 4

// console.log(max(123, 456));
// // 456

// console.log(max(1, 2, 3, 0, 4, 5));
// // 5
