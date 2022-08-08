describe("flat", function () {
  test("flat 1, 2 arrays", function () {
    const array = [1, 2, 3, [4, 5]];
    const value = 1;
    result = flat(array, value);

    check(result);
  });
});
