function slice(array, start, end) {
  if (!start) start = 0;
  if (!end) end = array.length;

  newArray = [];

  if (start >= 0 && end >= 0) {
    for (let i = start; i < end; i++) {
      newArray.push(array[i]);
    }
  } else if (start < 0 && end >= 0) {
    for (let i = array.length - Math.abs(start); i < array.length; i++) {
      newArray.push(array[i]);
    }
  } else if (start >= 0 && end < 0) {
    for (let i = start; i < array.length - Math.abs(end); i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(slice(["ant", "bison", "camel", "duck", "elephant"], -2, -1));
