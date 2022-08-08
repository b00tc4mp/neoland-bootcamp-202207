describe("join", function () {
  test("Words with space", function () {
    const elements = ["Fire", "Air", "Water", "Earth"];
    const separator = " ";

    const result = join(elements, separator);

    check(
      result,
      elements[0] +
        separator +
        elements[1] +
        separator +
        elements[2] +
        separator +
        elements[3]
    );
  });

  test("Words without space", function () {
    const elements = ["Fire", "Air", "Water", "Earth"];
    const separator = "";

    const result = join(elements, separator);

    check(
      result,
      elements[0] +
        separator +
        elements[1] +
        separator +
        elements[2] +
        separator +
        elements[3]
    );
  });

  test("Words with -", function () {
    const elements = ["Fire", "Air", "Water", "Earth"];
    const separator = "-";

    const result = join(elements, separator);

    check(
      result,
      elements[0] +
        separator +
        elements[1] +
        separator +
        elements[2] +
        separator +
        elements[3]
    );
  });

  test("words with ,", function () {
    const elements = ["Fire", "Air", "Water", "Earth"];
    const separator = ",";

    const result = join(elements);

    check(
      result,
      elements[0] +
        separator +
        elements[1] +
        separator +
        elements[2] +
        separator +
        elements[3]
    );
  });
});
