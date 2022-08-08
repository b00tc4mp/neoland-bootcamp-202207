describe("TEST: abs", function () {
  test("abs two", function () {
    check(abs(-5), 5);
  });
  test("abs 180", function () {
    check(abs(2 * 10 * -9), 180);
  });
  test("abs 8", function () {
    check(abs(1.2345 - 9.8765), 8.642);
  });
  test("abs 51", function () {
    check(abs(12 * 4 + 3), 51);
  });
  test("abs 21", function () {
    check(abs(12 * 4 + 3 - 71), 20);
  });
});

// // demos

// console.log(abs(2));
// // 5

// console.log(abs(2 * 10 * -9));
// // 180

// console.log(abs(1.2345 - 9.8765));
// // 8.642

// console.log(abs1(12 * 4 + 3));
// console.log(abs1(12 * 4 + 3 - 71));

// console.log(abs2(12 * 4 + 3));
// console.log(abs2(12 * 4 + 3 - 71));

// // numero absoluto
// // -21 = 21
// //21 = 21
