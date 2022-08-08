//TODO complete the function so that it goes back wards,
//copying the last pieces right the value of count
//then filling the void with the arguments

function spliceTwo(array, start, count = array.length - start, ...input) {
  /*   console.log(input);
  console.log(input.length); */

  const removed = [];
  const originalLength = array.length;

  if (start + array.length < 0) start = 0;
  else if (start < 0) start = array.length + start;
  if (start - count > array.length) start = array.length;
  if (count + start > array.length) count = array.length - start;

  //This adds to the removed array

  for (let i = start; i < start + count; i++) {
    removed[i - start] = array[i];
  }

  /*   console.log("removed");
  console.log(removed); */

  //This shifts the array properties right if there is no count and input

  if (count === 0) {
    // && input !== undefined)
    for (let i = array.length - 1; i >= start; i--) {
      array[i + input.length] = array[i];
    }

    /*     console.log("array shifted");
    console.log(array); */
  }

  //This shifts the array properties left if the count is greater than the input

  if (count > input.length && input.length !== 0) {
    for (let i = start + input.length; i < array.length; i++) {
      array[i - count + input.length] = array[i];
    }

    /*     console.log("array shifted");
    console.log(array); */
  }

  // This adds the input elements to the original array

  if (input) {
    for (let i = 0; i < input.length; i++) {
      array[i + start] = input[i];
    }
  }

  /*   console.log("array elements added");
  console.log(array); */

  // This trims the end of the array to the corect length

  if (input) array.length = originalLength - count + input.length;
  else if (arguments.length === 1) array.length = start;

  /*   console.log("array trimmed");
  console.log(array); */

  return removed;
}
