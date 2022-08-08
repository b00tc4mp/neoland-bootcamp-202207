//TODO complete the function so that it goes back wards,
//copying the last pieces right the value of count
//then filling the void with the arguments

function splice(array, start, count = array.length - start, ...input) {
  const arrayTemp = [];

  const result = [];

  const inputs = [];

  if (start + array.length < 0) start = 0;
  else if (start < 0) start = array.length + start;
  if (start - count > array.length) start = array.length;
  if (count + start > array.length) count = array.length - start;

  // This part fills inputs with the inputs from arguments

  for (let i = 3; i < arguments.length; i++) {
    inputs[i - 3] = arguments[i];
  }

  /*   console.log(inputs); */

  // This part fills arrayTemp with the array variables to be spliced back later

  for (let i = start + count; i < array.length; i++) {
    arrayTemp[i - start - count] = array[i];
  }
  /*  console.log(arrayTemp); */

  // This part fills result with the removed variables

  for (let i = start; i < start + count; i++) {
    result[i - start] = array[i];
  }
  /*   console.log(result); */

  // this part adds the input to the original array

  for (let i = start; i < inputs.length + start; i++) {
    array[i] = inputs[i - start];
  }
  /*   console.log(array); */

  // This part puts the removed variables back in the original array

  for (
    let i = start + inputs.length;
    i < arrayTemp.length + start + inputs.length;
    i++
  ) {
    array[i] = arrayTemp[i - start - inputs.length];
  }

  /*   console.log(array); */

  array.length = start + inputs.length + arrayTemp.length;

  /*   console.log(result);
  console.log(array); */

  return result;
}
