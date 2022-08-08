describe("TEST: concat arrays of arrays", function () {
  const arrayOfArraysNumbers = [
    [1, 2],
    [3, 4, 5],
  ];

  const arrayOfArraysStrings = [
    [1, 2],
    [3, 4, 5],
  ];

  const oneArrayNumbers = concat(arrayOfArraysNumbers);
  const oneArrayStrings = concat(arrayOfArraysStrings);

  test("arrays of numbers 1", function () {
    check(concat(arrayOfArrays1), [1, 2, 3, 4, 5]);
    check(result[0], 1);
    check(result[1], 2);
    check(result[2], 3);
  });
});
