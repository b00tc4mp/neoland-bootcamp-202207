describe("TEST: powerFor", function () {
  test("power 10_3", function () {
    check(powerFor(10, 3), 1000);
  });
  test("power 3_4", function () {
    check(powerFor(3, 4), 81);
  });
  test("power 0_0", function () {
    check(powerFor(0, 0), 0);
  });
});

// console.log(powerFor(10, 3));

// console.log(powerFor(3, 4));

// console.log(powerFor(0, 0));
