describe("TEST: countChars", function () {
  test("hola mundo", function () {
    check(countChars("hola mundo"), 9);
  });

  test("hello world", function () {
    check(countChars("hello world"), 10);
  });

  test("1 2 3 4 5", function () {
    check(countChars("1 2 3 4 5"), 5);
  });
});

// console.log(countChars("hola mundo"));
// // 9

// console.log(countChars("hello world"));
// // 10

// console.log(countChars("1 2 3 4 5"));
// // 5
