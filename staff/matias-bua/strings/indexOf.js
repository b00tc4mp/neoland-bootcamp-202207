function indexOf(string, searchString) {
  // TODO

  function indexOf(string, searchString) {
    const stringLength = string.length;
    const searchStringLength = searchString.length;

    let counter = 0;

    if (searchStringLength > stringLength) {
      return -1;
    } else {
      for (let i = 0; i < stringLength; i++) {
        if (searchString[0] === string[i]) {
          let index = i;
          for (let j = 0; j < searchStringLength; j++) {
            if (searchString[j] === string[i]) {
              counter += 1;
              i++;
            }
            if (counter === searchStringLength) {
              return index;
            }
          }
        }
      }
      return -1;
    }
  }
}
