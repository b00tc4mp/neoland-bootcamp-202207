describe("indexOf", function () {
  test("test indexOf animals", function () {
    const array = ["dog", "cat", "elephant", "monkey", "monkey"];
    const value = "monkey";
    let result = indexOf(array, value);

    check(result, 3);
  });

  test("test indexOf hello world", function () {
    const array = ["hello", "world", "bye", "mars"];
    const value = "hello";
    let result = indexOf(array, value);

    check(result, 0);
  });

  test("test indexOf hola", function () {
    const array = ["hello", "world", "bye", "mars"];
    const value = "hola";
    let result = indexOf(array, value);

    check(result, -1);
  });
});
