function sign(value) {
  // TODO ...
  if (value < 0) return -1;

  if (value === 0) return 0;

  if (value > 0) return 1;
}

// tests

console.log(sign(3));
// 1

console.log(sign(-3));
// -1

console.log(sign(0));
// 0

console.log(sign("-3"));
// -1
