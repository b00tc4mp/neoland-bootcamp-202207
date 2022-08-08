function includes(array, value) {
  let bool = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      bool = true;
      break;
    } else bool = false;
  }
  return bool;
}

//console.log(includes(["cow", "sheep", "snake"], "snake"));
