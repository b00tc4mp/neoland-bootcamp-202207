describe("ReplaceChar", function () {
  test("hola mundo o U", function () {
    check(replaceChar(" hola mundo", "o", "U"), "hUla mundU");
  });
});
test("0123456_89 _ 7", function () {
  check(replaceChar("0123456_89", "_", "7"), "0123456789");
});
test("hell- w-rld - ", function () {
  check(replaceChar("hell- w-rld", "-", "o"), "hello world");
});

// tests

console.log(replaceChar(" hola mundo", "o", "U"));
// hUla mundU

console.log(replaceChar("0123456_89", "_", "7"));
// 0123456789

console.log(replaceChar("hell- w-rld", "-", "o"));
// hello world
