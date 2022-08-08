describe("push", function () {
  test("pushes animals", function () {
    const animals = ["pigs", "goats", "sheep"];

    const length = animals.length;

    let count = push(animals, "cows");

    check(count, length + 1);
    check(animals.length, length + 1);
    check(animals[animals.length - 1], "cows");
  });

  test("pushes varius animals", function () {
    const animals = ["pigs", "goats", "sheep"];
    const length = animals.length;
    let count = push(animals, "cows", "wolves", "snakes");
    check(count, length + 3);
    check(animals.length, length + 3);
    check(animals[animals.length - 1], "snakes");
  });
});
