describe("at", function () {
  test("find element position 2", function () {
    const animals = ["cat", "dog", "elephant"];
    const value = 2;
    const result = at(animals, value);

    check(result, animals[value]);
  });
});
