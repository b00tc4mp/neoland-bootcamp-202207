describe("TEST: index of", function () {
  test("index of monkey", function () {
    check(indexOf(["dog", "cat", "elephant", "monkey"], "monkey"), 3);
  });
  test("index of hello", function () {
    check(indexOf(["hello", "world", "bye", "mars"], "hello"), 0);
  });
  test("index of 4", function () {
    check(indexOf([1, 2, 3, 4, 5, 6, 7, 8, 4], 4), 3);
  });
  test("index of 4 duplicated", function () {
    check(indexOf([1, 2, 3, 4, 5, 6, 7, 8, 4], 4), 3, 8);
  });
});

// console.log(indexOf(["dog", "cat", "elephant", "monkey"], "monkey"));
// // expected output: 3

// console.log(indexOf(["hello", "world", "bye", "mars"], "hello"));
// // expected output: 0
