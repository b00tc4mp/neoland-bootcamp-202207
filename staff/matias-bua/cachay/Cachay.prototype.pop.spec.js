describe("Cachay.prototype.pop", function () {
  it("in array of numbers", function () {
    const arrayOfNumbers = new Cachay(0, 1, 2, 3);

    expect(pop(arrayOfNumbers)).to.equal(3);
    expect(arrayOfNumbers[0]).to.equal(0);
    expect(arrayOfNumbers[1]).to.equal(1);
    expect(arrayOfNumbers[2]).to.equal(2);
    expect(arrayOfNumbers[3]).to.equal(undefined);
    expect(arrayOfNumbers.length).to.equal(3);
  });
});
//   it("in array of strings", function () {
//     const arrayOfword = [0, 1, 2, 3];

//     expect(pop(arrayOfword), 3);

//     expect(animals[0], 0);
//     expect(animals[1], 1);
//     expect(animals[2], 2);
//     expect(animals[3], undefined);
//     expect(animals.length, 3);
//   });
// });

// var animals = ["dog", "cat", "elephant"];

// console.log(pop(animals));
// // expected output: 'elephant'

// console.log(animals);
// // expected output: ['dog', 'cat']
