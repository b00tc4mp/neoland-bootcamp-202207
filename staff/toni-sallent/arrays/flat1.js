function flat(array, value) {
  if (!value) value = 1;

  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i];

    if (newArray[i].length > 1) {
      for (let j = 0; j < newArray.length; j++) {
        newArray[i] = array[i][j];
      }
    }
  }
}
console.log(flat([1, 2, 3, [4, [5, [6, 7, 8]]]], 2));
