//TODO complete the function so that it goes back wards,
//copying the last pieces right the value of count
//then filling the void with the arguments

Cachay.prototype.splice1 = function (
  start,
  count = this.length - start,
  ...input
) {
  /*   console.log(input);
    console.log(input.length); */

  const removed = [];
  const originalLength = this.length;

  if (start + this.length < 0) start = 0;
  else if (start < 0) start = this.length + start;
  if (start - count > this.length) start = this.length;
  if (count + start > this.length) count = this.length - start;

  //This adds to the removed this

  for (let i = start; i < start + count; i++) {
    removed[i - start] = this[i];
  }

  /*   console.log("removed");
    console.log(removed); */

  //This shifts the this properties right if there is no count and input

  if (count === 0) {
    // && input !== undefined)
    for (let i = this.length - 1; i >= start; i--) {
      this[i + input.length] = this[i];
    }

    /*     console.log("this shifted");
      console.log(this); */
  }

  //This shifts the this properties left if the count is greater than the input

  // if (count > input.length && input.length !== 0) {
  if (count > input.length && input.length !== 0) {
    for (let i = start + input.length; i < this.length; i++) {
      this[i - count + input.length] = this[i];
    }
  }

  /*     console.log("this shifted");
      console.log(this); */

  // This adds the input elements to the original this

  if (input) {
    for (let i = 0; i < input.length; i++) {
      this[i + start] = input[i];
    }
  }

  // New code written to complete the last test case (count with no input)
  // if (count > input.length && input.length === 0) {
  if (count !== 0 && input.length === 0) {
    for (let i = start + count; i < this.length; i++) {
      this[i - count] = this[i];
    }
  }

  /*   console.log("this elements added");
    console.log(this); */

  // This trims the end of the this to the corect length

  if (input) this.length = originalLength - count + input.length;
  else if (arguments.length === 1) this.length = start;

  /*   console.log("this trimmed");
    console.log(this); */

  // New code to delete excess items in Cachay
  for (let i = this.length; i < originalLength; i++) {
    delete this[i];
  }

  return removed;
};
