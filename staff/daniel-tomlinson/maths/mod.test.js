describe("TEST: mod", function () {
  test("mod 10 % 2", function () {
    check(mod(10, 2), 0);
  });
  test("mod 3 % 2", function () {
    check(mod(3, 2), 1);
  });
  test("mod 10 % 2", function () {
    check(mod(11, 3), 2);
  });
  //   test("mod fraction", function () {
  //     check(mod(11.58, 2.3), 0);
  //   });
});

// // tests

// console.log(mod(10, 2));
// // 0

// console.log(mod(3, 2));
// // 1

// console.log(mod(11, 3));
// // 2
