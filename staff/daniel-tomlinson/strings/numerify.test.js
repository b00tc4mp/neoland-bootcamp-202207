// tests

describe("TEST numerify", function () {
  test("hello world", function () {
    check(numerify("hello world"), "h3ll0 w0rld");
  });

  test("hello world", function () {
    check(numerify("HELLO WORLD"), "H3LL0 W0RLD");
  });

  test("hello world", function () {
    check(numerify("one two three four five"), "0n3 tw0 thr33 f0ur f1v3");
  });

  test("hello world", function () {
    check(numerify("murcielago"), "murc13l4g0");
  });

  test("hello world", function () {
    check(numerify("123"), "123");
  });

  test("hello world", function () {
    check(numerify("MuRcIeLaGo"), "MuRc13L4G0");
  });
});
