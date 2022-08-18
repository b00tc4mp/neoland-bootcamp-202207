describe(array.prototype.slice, () => {
  test("slice starting from index", () => {
    const animals = ["ant", "bison", "camel", "duck", "elephant"];

    const result = animals.slice(2);

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

  test("slice starting and ending ata indexes");
  const animals = ["ant", "bison", "camel", "duck", "elephant"];

  const result = animals.slice(2, 4);

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
test("slice starting and ending ata indexes");
const animals = ["ant", "bison", "camel", "duck", "elephant"];

const result = animals.slice(1, 5);

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

test("slice starting and ending ata indexes");
const animals = ["ant", "bison", "camel", "duck", "elephant"];

const result = animals.slice(1, 5);

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
