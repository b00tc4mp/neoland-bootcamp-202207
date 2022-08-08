function includes(string, search) {
  let result = "";

  //
  for (let i = 0; i < string.length; i++) {
    if (string[i] === search[0]) {
      let k = 0;
      for (let j = i; j < i + search.length; j++) {
        if (string[j] === search[k]) result += string[j];
        k++;
      }
    }
  }

  console.log(result);
  // }

  if (result === search) return true;
  else return false;
}
