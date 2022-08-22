function map(numbers, callback) {
  //
  let result = [0];
  for (let i = 0; i < numbers.length; i++) {
    result[i] = callback(numbers[i]);
  }
  return result;
}


