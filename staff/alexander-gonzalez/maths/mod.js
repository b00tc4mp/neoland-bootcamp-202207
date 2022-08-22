function mod(value, divisor) {
  /*  var result;

    result = (value % divisor);
  
    return result;*/

  return value % divisor
}

// tests

// 0

console.log(mod(3, 2));
// 1

// 1 * 2 = 2
// 3 - 2 = 1

console.log(mod(11, 3));
// 2
// 3 * 3 = 9
// 11 - 9 = 2


console.log(mod(7, 9))