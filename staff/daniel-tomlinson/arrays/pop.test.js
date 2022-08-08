/* describe("TEST: pop", function () {
  test("arrayOfNumbers", function () {
    check(pop(arrayOfNumbers), 3);
  });
  test("animals", function () {
    check(pop(animals), "elephant");
  });
  test("emptyArray", function () {
    check(pop(emptyArray), "undefined");
  });
});

//Not sure where this part of the code came from??

check(pop(arrayOfNumbers), 3);
});
test("animals", function () {
  check(pop(animals), "elephant");
});
test("emptyArray", function () {
  check(pop(emptyArray), "undefined");

});
 */

describe("TEST: pop", function () {
  test("pops a plant", function () {
    const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
    const length = plants.length;

    const plant = pop(plants);

    check(plant, "tomato");
    check(plants.length, length - 1);
    check(plants[0], "broccoli");
    check(plants[1], "cauliflower");
    check(plants[2], "cabbage");
    check(plants[3], "kale");
  });
});

// console.log(pop(arrayOfNumbers));
// // expected output: 3

// console.log(arrayOfNumbers);
// // expected output: [0, 1, 2]

// console.log(pop(animals));
// // expected output: 'elephant'

// console.log(animals);
// // expected output: ['dog', 'cat']

// console.log(pop(emptyArray));
// //expected

// console.log(emptyArray);
// //expected
