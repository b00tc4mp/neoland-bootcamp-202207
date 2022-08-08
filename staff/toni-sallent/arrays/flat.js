function flat(array, value) {
  if (!value) value = 1;
  const newArray1 = [];

  for (let r = 0; r < value; r++) {
    for (let i = 0; i < newArray1.length + 1; i++) {
      let element = array[i];
      if (element.length > 1) {
        for (let j = 0; j < element.length; j++) {
          element[i][j] = array[i][j];
        }
      } else {
        newArray1[i] = array[i];
      }
    }
    return newArray1;
  }
}
const array1 = [1, 2, 3, [4, [5, 6]], 7];

const flaten = [1, 2, 3, [4, [5, 6]], 7].flat();

console.log(flaten);
console.log(flat(array1, 2));

console.log(array1[3][1]);
