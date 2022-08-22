function join(array, separator) {
  var result = "";
  if (!separator) {
    separator = ",";
  }
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    //result = result + element
    result += element;
    if (i < array.length - 1) result += separator;
  }
  return result;
}

// tests;

console.log(join(["Fire", "Air", "Water"], " "));
// Fire Air Water

console.log(join(["Fire", "Air", "Water"], ""));
// FireAirWater

console.log(join(["Fire", "Air", "Water"], "-"));
// Fire-Air-Water

console.log(join(["Fire", "Air", "Water"]));
// Fire,Air,Water
