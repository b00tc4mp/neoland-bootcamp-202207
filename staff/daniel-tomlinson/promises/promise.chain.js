// Because there are no errors, the result of this is 60
// The catch never realises because there are no errors

new Promise((resolve, reject) => {
  resolve(10);
})
  // the result of the 'resolve' is passed down to the next then, so here we can change it e.g. using 'res' instead
  .then((res) => {
    console.log(res);

    return res + 10;
  })
  .then((res) => {
    console.log(res);

    return res + 10;
  })
  // instead of res here, we use err, but it is the same, it is the result of the previous resolve
  .catch((err) => {
    console.error(err);

    return err + 10;
  })
  .then((res) => {
    console.log(res);

    return res + 10;
  })
  .then((res) => {
    console.log(res);

    return res + 10;
  })
  .catch((err) => {
    console.error(err);

    return err + 10;
  })
  .then((res) => {
    console.log(res);

    return res + 10;
  });

// =================== //

new Promise((resolve, reject) => {
  resolve(10);
})
  // the result of the 'resolve' is passed down to the next then, so here we can change it e.g. using 'res' instead
  .then((res) => {
    console.log(res);

    // catch is just for throws, doesn't necessarily need to be an error
    // An error doesn't throw and error, a throw throws and error
    // Try catch is for throws (not necessarily errors)

    throw res - 10;

    return res + 10;
  })
  .then((res) => {
    console.log(res);

    return res + 10;
  })
  .catch((err) => {
    console.error(err);

    return err + 10;
  })
  .then((res) => {
    console.log(res);

    return res + 10;
  })
  .then((res) => {
    console.log(res);

    return res + 10;
  })
  .catch((err) => {
    console.error(err);

    return err + 10;
  })
  .then((res) => {
    console.log(res);

    return res + 10;
  });
