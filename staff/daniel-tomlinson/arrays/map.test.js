describe("map", function () {
  //   test("doble", function () {
  //     const array = [1, 4, 9];
  //     function callback(num) {
  //       return num * 2;
  //     }
  //     const result = map(array, callback);

  //     check(result[0], array[0] * 2);
  //     check(result[1], array[1] * 2);
  //     check(result[2], array[2] * 2);
  //   });

  //   test("raices", function () {
  //     const array = [1, 4, 9];
  //     function callback(num) {
  //       return Math.sqrt(num);
  //     }
  //     const result = map(array, callback);

  //     check(result[0], Math.sqrt(array[0]));
  //     check(result[1], Math.sqrt(array[1]));
  //     check(result[2], Math.sqrt(array[2]));
  //   });

  test("potencia de 2", function () {
    const array = [1, 4, 9];
    function callback(num) {
      var result = num;

      for (let i = 1; i < 2; i++) {
        result = num * result;
      }

      return result;
    }
    const result = map(array, callback);

    check(result[0], array[0] * array[0]);
    check(result[1], array[1] * array[1]);
    check(result[2], array[2] * array[2]);

    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
  });
});
