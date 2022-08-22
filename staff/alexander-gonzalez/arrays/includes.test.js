
describe("includes", function () {
  test("true or false", function () {
    let array = [1, 2, 3];
    const element = 2;
    let result = includes(element, array);

    check(result, true);
  });
  let array = [1, 2, 3];
  const element = 5;
  let result = includes(element, array);

  check(result, false);
});

