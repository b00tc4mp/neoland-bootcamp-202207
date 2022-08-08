describe("reverse", function () {
  test("reverse an array", function () {
    const array = ["one", "two", "three"];
    let newArray = reverse(array);
    let result = array.reverse();

    check(newArray.length, result.length);
    check(newArray[0], result[0]);
    check(newArray[1], result[1]);
    check(newArray[2], result[2]);
  });
});
