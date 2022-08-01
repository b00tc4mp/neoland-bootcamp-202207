describe("TEST: Includes", function () {
  test("Includes cat", function () {
    check(includes("the cat is under the table", "cat"), true);
  });
  test("Includes dog", function () {
    check(includes("the cat is under the table", "dog"), false);
  });
});
