function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = callback(array[i]);
  }
  return result;
}

// function powerFor(val) {
//   //   if (pow === 0) return 0;
//   var result = 1;
//   for (let i = 0; i < 2; i++) {
//     result *= val;
//   }
//   return result;
// }

// TODO

//This should also be able to work in some way with an array of objects:

/* const productList = [
  { product: leek, price: 20, discount: 10 },
  { product: potato, price: 60, discount: 20 },
  { product: tomato, price: 30, discount: 5 },
  { product: juice, price: 10, discount: 10 },
]; */
