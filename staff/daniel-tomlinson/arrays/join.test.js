describe("join", function () {
  test("joins with space", function () {
    const elements = ["Fire", "Air", "Water", "Earth"];
    const separator = " ";

    const result = join(elements, separator);

    check(result, "Fire Air Water Earth");
  });

  test("joins with dash", function () {
    const elements = ["Fire", "Air", "Water", "Earth"];
    const separator = "-";

    const result = join(elements, separator);

    check(result, "Fire-Air-Water-Earth");
  });

  test("joins with comma", function () {
    const elements = ["Fire", "Air", "Water", "Earth"];
    const separator = ",";

    const result = join(elements, separator);

    check(result, "Fire,Air,Water,Earth");
  });

  test("no separator", function () {
    const elements = ["Fire", "Air", "Water", "Earth"];
    // const separator = ;

    const result = join(elements);

    check(result, "FireAirWaterEarth");
  });
});
// console.log(join(["Fire", "Air", "Water"], " "));
// // Fire Air Water

// console.log(join(["Fire", "Air", "Water"], ""));
// // FireAirWater

// console.log(join(["Fire", "Air", "Water"], "-"));
// // Fire-Air-Water

// console.log(join(["Fire", "Air", "Water"]));
// // Fire,Air,Water
