describe("TEST: replaceChar", function () {
  test("o => U", function () {
    check(replaceChar("hola mundo", "o", "U"), "hUla mundU");
  });
  test("_ => 7", function () {
    check(replaceChar("0123456_89", "_", "7"), "0123456789");
  });
  test("- => o", function () {
    check(replaceChar("hell- w-rld", "-", "o"), "hello world");
  });
});

/* console.log(replaceChar("hola mundo", "o", "U"));
// hUla mundU

console.log(replaceChar("0123456_89", "_", "7"));
// 0123456789

console.log(replaceChar("hell- w-rld", "-", "o"));
// hello world */
