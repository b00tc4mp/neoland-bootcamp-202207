// tests

describe("TEST: countWords", function () {
  test("adiós mundo cruel", function () {
    check(countWords("adiós mundo cruel"), 3);
  });
  test("hellow world double space", function () {
    check(countWords("hello    world"), 2);
  });
  test("hello world triple space", function () {
    check(countWords("hello   world"), 2);
  });
  test("numbers 1 - 5", function () {
    check(countWords("1 2 3 4 5"), 5);
  });
  test("empty string", function () {
    check(countWords(""), 0);
  });
  test("one space", function () {
    check(countWords(" "), 0);
  });
  test("two spaces", function () {
    check(countWords("  "), 0);
  });
  test("three spaces", function () {
    check(countWords("   "), 0);
  });
  test("four spaces", function () {
    check(countWords("    "), 0);
  });
  test("five spaces", function () {
    check(countWords("     "), 0);
  });
});

// console.log(countWords("adiós mundo cruel"));
// // 3

// console.log(countWords("hello    world"));
// // 2

// console.log(countWords("1 2 3 4 5"));
// // 5

// console.log(countWords("hello   world"));
// // 2

// console.log(countWords("       "));
// // 0

// console.log(countWords(""));
// console.log(countWords(" "));
// console.log(countWords("  "));
// console.log(countWords("   "));
// console.log(countWords("    "));
// console.log(countWords("     "));
// // 0
