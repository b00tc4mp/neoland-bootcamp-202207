const arrayOfArraysNumbers = [
  [1, 2],
  [3, 4, 5],
];

const arrayOfArraysStrings = [
  ["hello", "oops", "chocolate"],
  ["byebye", "toast", "motobike"],
];

const longArrayOfArrays = [
  [
    [1, 2],
    [3, 4, 5],
  ],
  [
    ["hello", "oops", "chocolate"],
    ["byebye", "toast", "motobike"],
  ],
];

// This works passing two arrays of arrays, but doesnt work with simple arrays

function concat() {
  var result = [];
  for (let i = 0; i < arguments.length; i++) {
    var argument = arguments[i];
    for (let j = 0; j < argument.length; j++) {
      var element = argument[j];
      for (let k = 0; k < argument.length; k++) {
        var character = element[k];
        result[result.length] = character;
      }
    }
  }
  return result;
}

// console.log(concat(arrayOfArraysNumbers));
// console.log(concat(arrayOfArraysStrings));
console.log(concat(arrayOfArraysNumbers));

// Tests to focus on:
//Test 1
[1, 2];
//TEst 2
[1, 2], [3, 4];
//Test 3
[([1, 2], [3, 4])];
//Test 4
[([1, 2], [3, 4])],
  [
    [5, 6],
    [7, 8],
  ];
//Test 5
[([1, 2], [3, 4])],
  [
    [5, 6],
    [7, 8],
  ][(9, 10)];
