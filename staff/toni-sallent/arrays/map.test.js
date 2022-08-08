describe("map", function () {
  test("multiplyX2", function () {
    array = [1, 5, 10, 15];

    const result = map(array, function (element) {
      return element * 2;
    });

    expected = [2, 10, 20, 30];

    check(result.length, expected.length);
    check(result[0], expected[0]);
    check(result[1], expected[1]);
    check(result[2], expected[2]);
    check(result[3], expected[3]);
  });

  test("squared", function () {
    array = [1, 5, 10, 15];

    const result = map(array, function (element) {
      return Math.pow(element, 2);
    });

    expected = [1, 25, 100, 225];

    check(result.length, expected.length);
    check(result[0], expected[0]);
    check(result[1], expected[1]);
    check(result[2], expected[2]);
    check(result[3], expected[3]);
  });

  test("squared", function () {
    array = ["a", "b", "c", "d"];

    const result = map(array, function (element) {
      return element.toUpperCase();
    });

    expected = ["A", "B", "C", "D"];

    check(result.length, expected.length);
    check(result[0], expected[0]);
    check(result[1], expected[1]);
    check(result[2], expected[2]);
    check(result[3], expected[3]);
  });
});
