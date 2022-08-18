describe("Numerify", function () {
  test("Hello World", function () {
    check(numerify("Hello Word"), "H3ll0 W0rd");
  });

  test("one two three four five", function () {
    check(numerify("one two three four five"), "0n3 tw0 thr33 f0ur f1v3");
  });

  test("Murcielago", function () {
    check(numerify("Murcielago"), "Murc13l4g0");
  });

  test("123", function () {
    check(numerify("123"), "123");
  });
});

// console.log(numerify("Hello World"));
// // H3ll0 W0rld

// console.log(numerify("one two three four five "));
// // 0n3 tw0 thr33

// console.log(numerify("Murcielago"));
// // Murc13g4l0

// console.log(numerify("123"));
// //123
