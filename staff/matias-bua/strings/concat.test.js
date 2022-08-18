describe("Concat", function () {
  test("hola mundo", function () {
    check(concat("Hola", "Mundo"), "HolaMundo");
  });

  test("adios mundo cruel", function () {
    check(concat("Adios", "Mundo", "Cruel"), "AdiosMundoCruel");
  });

  test("ilovecoding", function () {
    check(concat("i", " ", "love", " ", "coding"), "i love coding");
  });
});
