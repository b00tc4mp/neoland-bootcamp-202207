describe("Count-Worls", function () {
  test("hola mundo", function () {
    check(countWords("Hola Mundo"), 2);
  });

  test("adiós mundo cruel", function () {
    check(countWords("adiós mundo cruel"), 3);
  });
  test("hello world", function () {
    check(countWords("hello world"), 2);
  });
  test("1 2 3 4 5", function () {
    check(countWords("1 2 3 4 5"), 5);
  });
});

//tests

// console.log(countWords("adiós mundo cruel"));
//3

// console.log(countWords("hello world"));
//2

// console.log(countWords("1 2 3 4 5"));
//5
