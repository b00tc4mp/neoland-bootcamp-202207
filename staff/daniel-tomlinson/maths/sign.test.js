describe("TEST: sign", function () {
  test("sign 3", function () {
    check(sign(3), 1);
  });
  test("sign -3", function () {
    check(sign(-3), -1);
  });
  test("sign 0", function () {
    check(sign(0), 0);
  });
  test("sign 23", function () {
    check(sign(23), 1);
  });
  test("sign -23", function () {
    check(sign(-23), -1);
  });
  test("sign decimal", function () {
    check(sign(0.0001), 1);
  });
  test("sign fraction", function () {
    check(sign(10 / 23), 1);
  });
});

// // tests

// console.log(sign(3));
// // 1

// console.log(sign(-3));
// // -1

// console.log(sign(0));
// // 0

// console.log(sign("-3"));
// // -1
