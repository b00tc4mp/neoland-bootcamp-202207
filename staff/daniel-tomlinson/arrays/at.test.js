describe("TEST: at", function () {
  const animals = ["cat", "dog", "elephant"];
  const array2 = ["Adiós", 1, "Mundo"];

  test("animals", function () {
    check(at(animals, 2), "elephant");
    check(at(animals, 1), "dog");
    check(at(animals, 0), "cat");
    check(at(animals, -1), undefined);
    check(at(animals, 3), undefined);
  });

  test("array2", function () {
    check(at(array2, -1), undefined);
    check(at(array2, 0), "Adiós");
    check(at(array2, 1), 1);
    check(at(array2, 2), "Mundo");
    check(at(array2, 3), undefined);
  });
});

/* console.log(at(["cat", "dog", "elephant"], 2));
// expected output 'elephant'

console.log(at(["Adiós", 1, "Mundo"], 0));
// expected output 'Adiós' */
