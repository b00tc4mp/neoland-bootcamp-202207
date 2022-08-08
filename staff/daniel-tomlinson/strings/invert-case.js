// My first attempt

function invertCase(text) {
  var newString = "";

  for (let i = 0; i < text.length; i++) {
    var characterNew = "";

    if (text[i].toUpperCase() === text[i]) characterNew = text[i].toLowerCase();
    else characterNew = text[i].toUpperCase();

    newString += characterNew;
    // newString = newString.concat(newString, characterNew);
  }
  return newString;
}
