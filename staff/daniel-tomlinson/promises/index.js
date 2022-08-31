var fine = true;

function areStudentsFine() {
  setTimeout(() => {
    if (!fine) return callback(new Error("not fine :("));

    callback(null, "they are happy! :)");
  }, 4000);
}

areStudentsFine((error, result) => {
  if (error) return console.error(error);

  console.log(result);
});

// fine = false

// in the four seconds that the promise is waiting the values can change
// for example, if fine changes to false within the four seconds the result will change before the operation is executed
// We call a funtion that is asynchronous and takes time to execute
// Always error handling in first place

// Same code with callbacks and promises

var fine = true;

function areStudentsFine() {
  if (callback) {
    setTimeout(() => {
      if (!fine) return callback(new Error("not fine :("));

      callback(null, "they are happy! :)");
    }, 4000);
    return;
  }

  // habitually called resolve and reject but this is just a common practice
  // before we used error and result
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!fine) return reject(new Error("not fine :("));

      resolve(null, "they are happy! :)");
    }, 4000);
  });
}

/* areStudentsFine((error, result) => {
  if (error) return console.error(error);

  console.log(result);
}); */

areStudentsFine()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
