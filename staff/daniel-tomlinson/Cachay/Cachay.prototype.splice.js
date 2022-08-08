/* //TODO complete the function so that it goes back wards,
//copying the last pieces right the value of count
//then filling the void with the arguments

function splice(this, start, count = this.length - start, ...input) {
  const thisTemp = [];

  const result = [];

  const inputs = [];

  if (start + this.length < 0) start = 0;
  else if (start < 0) start = this.length + start;
  if (start - count > this.length) start = this.length;
  if (count + start > this.length) count = this.length - start;

  // This part fills inputs with the inputs from arguments

  for (let i = 3; i < arguments.length; i++) {
    inputs[i - 3] = arguments[i];
  }

  // console.log(inputs);

  // This part fills thisTemp with the this variables to be spliced back later

  for (let i = start + count; i < this.length; i++) {
    thisTemp[i - start - count] = this[i];
  }
  // console.log(thisTemp);

  // This part fills result with the removed variables

  for (let i = start; i < start + count; i++) {
    result[i - start] = this[i];
  }
  // console.log(result);

  // this part adds the input to the original this

  for (let i = start; i < inputs.length + start; i++) {
    this[i] = inputs[i - start];
  }
  // console.log(this);

  // This part puts the removed variables back in the original this

  for (
    let i = start + inputs.length;
    i < thisTemp.length + start + inputs.length;
    i++
  ) {
    this[i] = thisTemp[i - start - inputs.length];
  }

  // console.log(this);

  this.length = start + inputs.length + thisTemp.length;

  //  console.log(result);
  console.log(this);

  return result;
} */

// ============ Cachay ============= //

//TODO complete the function so that it goes back wards,
//copying the last pieces right the value of count
//then filling the void with the arguments

Cachay.prototype.splice = function (
  start,
  count = this.length - start,
  ...input
) {
  const cachayTemp = [];

  const result = {};

  const inputs = [];

  result.length = 0;

  const cachayOriginalLength = this.length;

  if (start + this.length < 0) start = 0;
  else if (start < 0) start = this.length + start;
  if (start - count > this.length) start = this.length;
  if (count + start > this.length) count = this.length - start;

  // This part fills inputs with the inputs from arguments
  // changed i = 3 to 2 for Cachay (1 less argument)

  for (let i = 2; i < arguments.length; i++) {
    inputs[i - 2] = arguments[i];
  }

  // console.log(inputs);

  // This part fills cachayTemp with the this variables to be spliced back later

  for (let i = start + count; i < this.length; i++) {
    cachayTemp[i - start - count] = this[i];
  }
  // console.log(cachayTemp);

  // This part fills result with the removed variables

  for (let i = start; i < start + count; i++) {
    result[i - start] = this[i];
    result.length++;
  }
  // console.log(result);

  // this part adds the input to the original this

  for (let i = start; i < inputs.length + start; i++) {
    this[i] = inputs[i - start];
    this.length++;
  }
  //  console.log(this);

  // This part puts the removed variables back in the original this

  for (
    let i = start + inputs.length;
    i < cachayTemp.length + start + inputs.length;
    i++
  ) {
    this[i] = cachayTemp[i - start - inputs.length];
    this.length++;
  }

  //  console.log(this);

  this.length = start + inputs.length + cachayTemp.length;

  for (let i = this.length; i < cachayOriginalLength; i++) {
    delete this[i];
  }

  // console.log(result);
  //   console.log(this);

  return result;
};
