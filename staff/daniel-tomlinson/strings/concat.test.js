// // tests

// console.log(concat("Hola", "Mundo"));
// // HolaMundo

// console.log(concat("Adios", "Mundo", "Cruel"));
// // AdiosMundoCruel

// console.log(concat("i", " ", "love", " ", "coding"));
// // i love coding

describe("TEST: Concat", function () {
  test("Two strings", function () {
    check(concat("Hola", "Mundo"), "HolaMundo");
  });
  test("Three strings", function () {
    check(concat("Adios", "Mundo", "Cruel"), "AdiosMundoCruel");
  });
  test("Strings with spaces", function () {
    check(concat("i", " ", "love", " ", "coding"), "i love coding");
  });
});
