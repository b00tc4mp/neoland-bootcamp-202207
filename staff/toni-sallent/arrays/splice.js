const months = ["Jan", "Feb", "March", "April", "June", "June", "July"];

//splice repl 0(it means we don't replace, we insert a new element without replacing anything)

function splice(array, index, repl, element) {
  const newArray = [];
  if (!element) {
    for (let i = 0; i < repl; i++) {
      for (let i = 0; i < array.length - 1; i++) {
        if (i === index) {
          array[i] = array[i + 1];
        } else {
          array[i] = array[i];
        }
      }
    }
  } else if (repl === 0) {
    for (let i = array.length - 1; i >= index; i--) {
      array[i + 1] = array[i];

      if (i === index) array[i] = element;
    }
  } else {
    for (let i = 0; i < repl; i++)
      for (let i = 0; i < array.length; i++) {
        if (i === index) {
          newArray.push(array[i]);
          array[i] = element;
          index += 1;

          break;
        } else {
          array[i] = array[i];
        }
      }
    //console.log(newArray.length);
  }
  return newArray;
}

//const months = ['Jan', 'March', 'April', 'June', 'June', 'July']
//const result = ["Jan", "March", "April", "May", "July"]

//months.splice(3, 2, 'May')

//console.log(
//splice(["Jan", "March", "April", "June", "June", "July"], 3, 1, "May")
//);

console.log(splice(months, 4, 1));

console.log(months);
