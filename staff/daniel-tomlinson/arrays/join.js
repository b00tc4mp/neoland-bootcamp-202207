function join() {
  //   // TODO ...
  let array1 = arguments[0];
  let newString = array1[0];
  if (arguments[1] === undefined) {
    for (let i = 0; i < array1.length - 1; i++) {
      newString += array1[i + 1];

      // if (i < array.length - 1) result += separator;
    }
    return newString;
  } else
    for (let i = 1; i < array1.length; i++)
      if (arguments.length === 2) newString += arguments[1] + array1[i];
      else {
        newString += "," + array1[i];
      }
  return newString;
}
