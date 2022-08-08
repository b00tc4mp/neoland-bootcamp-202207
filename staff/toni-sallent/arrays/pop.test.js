describe("pop", function () {
  test("pop tomato", function () {
    const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

    let result = pop(plants);
    const expected = "tomato";
    const plantsNewLength = 4;

    check(result, expected);
    check(plants.length, plantsNewLength);
  });
});
