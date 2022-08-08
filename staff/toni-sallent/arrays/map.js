function map(array, callback) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    newArray.push(callback(element));
  }
  return newArray;
}

console.log(
  map([1, 5, 10, 15], function (element) {
    return element * 2;
  })
);
const productsList = [
  { name: "milk", price: 20 },
  { name: "beer", price: 10 },
  { name: "water", price: 30 },
  { name: "sugar", price: 40 },
];
console.log(
  map(productsList, function (element) {
    name: element.name;
    price: element * 1, 2;
  })
);
