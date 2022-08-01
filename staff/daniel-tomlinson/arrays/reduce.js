/* function reduce(array) {
  for (let i = 0; i < array.length; i++) {
    array[0] = array[0] += array[i];
  }
  array.length = 1;

  return array;
}

console.log(reduce([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); //45 */

/* Not correct, reduce does not mutate the original array */

/* function reduce(array) {
  for (let i = 0; i < array.length; i++) {
    array[0] = array[0] += array[i];
  }
  array.length = 1;

  return array;
}

console.log(reduce([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); //45 */

/* ========== How reduce() works without an initial value ========== 
The code below shows what happens if we call reduce() with an array and no initial value. */

/* const array = [15, 16, 17, 18, 19];

function reducer(previous, current, index) {
  const returns = previous + current;
  console.log(
    `previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array.reduce(reducer); */

/* let array = [15, 16, 17, 18, 19];

function reduce(array) {
  let returnValue = 0;
  for (let i = 0; i < array.length; i++) {
    returnValue += array[i];
  }
  return returnValue;
}

console.log(reduce(array)); */

// Answer: Returns 85

/* ========== Starts at ten and returns 95 ========== */

/* [15, 16, 17, 18, 19].reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  10
); */

let array = [15, 16, 17, 18, 19];

function reduce(array, initialValue) {
  let returnValue = initialValue ? initialValue : 0;
  for (let i = 0; i < array.length; i++) {
    returnValue += array[i];
  }
  return returnValue;
}

console.log(reduce(array));
console.log(reduce(array, 10));

/*   The value returned by reduce() in this case would be 95. */

/*   ========== Sum of values in an object array ========== 
To sum up the values contained in an array of objects, you must supply an initialValue, so that each item passes through your function. */

/* const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (previousValue, currentValue) => previousValue + currentValue.x,
  0
);

console.log(sum); */

// Answer: logs 6

/* ========== Flatten an array of arrays ========== */

/* const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(
  (previousValue, currentValue) => previousValue.concat(currentValue),
  []
); */

// Answer: flattened is [0, 1, 2, 3, 4, 5]

/* ========== Counting instances of values in an object ========== */

/* const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

const countedNames = names.reduce((allNames, name) => {
  allNames[name] ??= 0;
  allNames[name]++;
  // Remember to return the object, or the next iteration
  // will receive undefined
  return allNames;
}, {}); */

// Answer: countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

/* ========== Grouping objects by a property ========== */

/* const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    acc[key] ??= [];
    acc[key].push(obj);
    return acc;
  }, {});
}

const groupedPeople = groupBy(people, "age"); */

// Answer: groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }

/* ========== Concatenating arrays contained in an array of objects using the spread operator and initialValue ========== */

// friends - an array of objects
// where object field "books" is a list of favorite books

/* const friends = [
  {
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21,
  },
  {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26,
  },
  {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18,
  },
];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
const allbooks = friends.reduce(
  (previousValue, currentValue) => [...previousValue, ...currentValue.books],
  ['Alphabet'],
); */

// Answer: allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]

/* ========== Replace .filter().map() with .reduce() ========== 
Using Array.filter() then Array.map() traverses the array twice, but you can achieve the same effect while traversing only once with Array.reduce(), thereby being more efficient. (If you like for loops, you can filter and map while traversing once with Array.forEach().) */

/* const numbers = [-5, 6, 2, 0];

const doubledPositiveNumbers = numbers.reduce((previousValue, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    previousValue.push(doubled);
  }
  return previousValue;
}, []);

console.log(doubledPositiveNumbers);  */

// Answer: [12, 4]

/* ========== Running Promises in Sequence ========== */

/**
 * Chain a series of promise handlers.
 *
 * @param {array} arr - A list of promise handlers, each one receiving the
 * resolved result of the previous handler and returning another promise.
 * @param {*} input The initial value to start the promise chain
 * @return {Object} Final promise with a chain of handlers attached
 */

/* function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  );
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5);
  });
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
  return a * 3;
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4);
  });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10).then(console.log); */

// Answer: 1200

/* =========== Function composition enabling piping ========== */

/* // Building-blocks to use for composition
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// Function composition enabling pipe functionality
const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240 */
