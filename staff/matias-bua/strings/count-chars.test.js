describe("Count-Chars", function () {
  test("hola mundo", function () {
    check(countChars("Hola Mundo"), 9);
  });

  test("adiós mundo cruel", function () {
    check(countChars("adiós mundo cruel"), 15);
  });
  test("hello world", function () {
    check(countChars("hello world"), 10);
  });
  test("1 2 3 4 5", function () {
    check(countChars("1 2 3 4 5"), 5);
  });
});
