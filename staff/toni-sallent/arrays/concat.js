function concat(a, b) {
  var newArray = [];
  for (i = 0; i < a.length; i++) {
    newArray.push(a[i]);
  }
  for (i = 0; i < b.length; i++) {
    newArray.push(b[i]);
  }
  return newArray;
}

//console.log(concat(['h', 'o', 'l', 'a'], ['m', 'u', 'n', 'd', 'o']))
