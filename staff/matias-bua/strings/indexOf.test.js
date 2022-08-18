describe("indexOf", function () {
  const artist = "Rosalía";

  test("on existing character", function () {
    check(indexOf(artist, "o"), 1);
  });

  test("on unexisting character", function () {
    check(indexOf(artist, "x"), -1);
  });

  test("on repeated character", function () {
    check(indexOf(artist, "a"), 3);
  });
  test("indexOf word", function () {
    check(indexOf(artist, "sal"), 2);
  });
});

// console.log(indexOf(["dog", "cat", "elephant", "monkey"], "monkey"));
// // expected output: 3

// console.log(indexOf(["hello", "world", "bye", "mars"], "hello"));
// // expected output: 0
