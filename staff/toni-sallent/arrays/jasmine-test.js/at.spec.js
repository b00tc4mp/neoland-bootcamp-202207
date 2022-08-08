describe("at", function () {
  it("find element position 2", function () {
    const animals = ["cat", "dog", "elephant"];
    const value = 2;
    const result = at(animals, value);

    expect(result).toEqual(animals[value]);
  });
});
