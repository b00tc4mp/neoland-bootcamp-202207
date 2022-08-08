describe("includes", function () {
  test("includes animal", function () {
    const animals = ["cow", "sheep", "snake"];
    const checkAnimal = "snake";
    const result = includes(animals, checkAnimal);

    check(result, true);
  });
});
