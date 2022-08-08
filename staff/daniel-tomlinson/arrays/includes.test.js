describe("includes", function () {
  test("no está en el array", function () {
    const array = [1, 2, 3, 4];
    const value = 5;
    const result = includes(array, value);

    check(result, false);
  });

  test("está en el array", function () {
    const array = [1, 2, 3, 4];
    const value = 2;
    const result = includes(array, value);

    check(result, true);
  });
});
