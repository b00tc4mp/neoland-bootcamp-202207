//Made with concat function

// function concat() {
//   let arrayTemp = [];
//   let newArray = [];
//   // TODO ...
//   for (let i = 0; i < arguments.length; i++) {
//     arrayTemp = arguments[i];
//     newArray = newArray.concat(arrayTemp);
//   }

//   return newArray;
// }

//Made without concat function but could only produce a string, not an array (so added "[" "]")

/* function concat() {
  let array = [];
  array = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    array += "," + arguments[i];

    return "[" + array + "]";
  }
}
 */
//Manu's Code:

// function concat(array, array2) {
//   var newArray = [];
//   var x = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     for (let j = 0; j < arguments[i].length; j++) {
//       newArray[x] = arguments[i][j];
//       x++;
//     }
//   }
//   return newArray;
// }

// function concat() {
//   let newArray = [];
//   let index = 0;
//   for (let i = 0; i < arguments.length; i++)
//     for (let j = 0; j < arguments[i].length; j++) {
//       newArray[index] = arguments[i][j];
//       index++;
//       // console.log(arguments[i][j]);
//       // console.log(newArray);
//     }
//   return newArray;
// }

// Toni Version

// function concat(array1, array2) {
//   var result = [];

//   for (let i = 0; i < array1.length; i++) {
//     var element = array1[i];
//     result.push(element);
//   }
//   for (let i = 0; i < array2.length; i++) {
//     var element = array2[i];
//     result.push(element);
//   }
//   return result;
// }

// Verion in class with arguments and push

// function concat() {
//   var result = [];
//   for (let i = 0; i < arguments.length; i++) {
//     var argument = arguments[i];
//     for (let j = 0; j < argument.length; j++) {
//       var element = argument[j];
//       result.push(element);
//     }
//   }
//   return result;
// }

// function a[a.length] = __  // instead of push

function concat() {
  var result = [];
  for (let i = 0; i < arguments.length; i++) {
    var argument = arguments[i];
    for (let j = 0; j < argument.length; j++) {
      var element = argument[j];
      result[result.length] = element;
    }
  }
  return result;
}
