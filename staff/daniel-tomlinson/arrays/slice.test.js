describe("slice", () => {
  test("slice starting from index", () => {
    const animals = ["ant", "bison", "camel", "duck", "elephant"];

    const result = slice(animals, 2);

    check(result.length, 3);
    check(result[0], "camel");
    check(result[1], "duck");
    check(result[2], "elephant");

    check(animals.length, 5);
    check(animals[0], "ant");
    check(animals[1], "bison");
    check(animals[2], "camel");
    check(animals[3], "duck");
    check(animals[4], "elephant");
  });

  test("slice starting and ending at indexes", () => {
    const animals = ["ant", "bison", "camel", "duck", "elephant"];

    const result = slice(animals, 2, 4);

    check(result.length, 2);
    check(result[0], "camel");
    check(result[1], "duck");

    check(animals.length, 5);
    check(animals[0], "ant");
    check(animals[1], "bison");
    check(animals[2], "camel");
    check(animals[3], "duck");
    check(animals[4], "elephant");
  });

  test("slice starting and ending at indexes (2)", () => {
    const animals = ["ant", "bison", "camel", "duck", "elephant"];

    const result = slice(animals, 1, 5);

    check(result.length, 4);
    check(result[0], "bison");
    check(result[1], "camel");
    check(result[2], "duck");
    check(result[3], "elephant");

    check(animals.length, 5);
    check(animals[0], "ant");
    check(animals[1], "bison");
    check(animals[2], "camel");
    check(animals[3], "duck");
    check(animals[4], "elephant");
  });

  test("slice starting with negative count", () => {
    const animals = ["ant", "bison", "camel", "duck", "elephant"];

    const result = slice(animals, -2);

    check(result.length, 2);
    check(result[0], "duck");
    check(result[1], "elephant");

    check(animals.length, 5);
    check(animals[0], "ant");
    check(animals[1], "bison");
    check(animals[2], "camel");
    check(animals[3], "duck");
    check(animals[4], "elephant");
  });

  test("slice starting at index and ending with negative count", () => {
    const animals = ["ant", "bison", "camel", "duck", "elephant"];

    const result = slice(animals, 2, -1);

    check(result.length, 2);
    check(result[0], "camel");
    check(result[1], "duck");

    check(animals.length, 5);
    check(animals[0], "ant");
    check(animals[1], "bison");
    check(animals[2], "camel");
    check(animals[3], "duck");
    check(animals[4], "elephant");
  });

  test("slice starting at index and ending with negative count (2)", () => {
    const animals = ["ant", "bison", "camel", "duck", "elephant"];

    const result = slice(animals, 2, -3);

    check(result.length, 0);

    check(animals.length, 5);
    check(animals[0], "ant");
    check(animals[1], "bison");
    check(animals[2], "camel");
    check(animals[3], "duck");
    check(animals[4], "elephant");
  });

  test("slice starting at index and ending with negative count (3)", () => {
    const animals = ["ant", "bison", "camel", "duck", "elephant"];

    const result = slice(animals, 2, -4);

    check(result.length, 0);

    check(animals.length, 5);
    check(animals[0], "ant");
    check(animals[1], "bison");
    check(animals[2], "camel");
    check(animals[3], "duck");
    check(animals[4], "elephant");
  });

  test("slice without index / count arguments", () => {
    const animals = ["ant", "bison", "camel", "duck", "elephant"];

    const result = slice(animals);

    check(result.length, 5);
    check(result[0], "ant");
    check(result[1], "bison");
    check(result[2], "camel");
    check(result[3], "duck");
    check(result[4], "elephant");

    check(result !== animals, true);

    check(animals.length, 5);
    check(animals[0], "ant");
    check(animals[1], "bison");
    check(animals[2], "camel");
    check(animals[3], "duck");
    check(animals[4], "elephant");
  });
});
