function flat(array, repeat) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(flat(array[i], repeat));
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(flat([1, 2, 3, [4, 5]], 2));
