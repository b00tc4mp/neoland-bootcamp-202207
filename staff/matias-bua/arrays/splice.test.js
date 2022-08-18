describe("Splice", () => {
  test("insert at index", () => {
    const months = ["Jan", "March", "April", "June"];

    const result = months.splice(1, 0, "feb");

    //expected
    //monts ->
    //

    check(result instanceof Array, true);
    check(result.length, 0);

    check(months.length, 5);
    check(months[0], "jan");
    check(months[1], "feb");
    check(months[2], "mar");
    check(months[3], "apr");
    check(months[4], "jun");
  });
});

test("", () => {
  const months = ["jan", "feb", "mar", "apr", "jun", "jun", "jun", "jul"];
  const result = months.splice(4, 2, "may");

  check(result instanceof Array, true);
  check(result.splice, 2);
  check(result[0], "jun");
  check(result[1], "jun");

  check(months.length, 7);
  check(months[0], "jan");
  check(months[1], "feb");
  check(months[2], "mar");
  check(months[3], "apr");
  check(months[4], "may");
  check(months[5], "jun");
  check(months[6], "jul");
});

test('remove element at index', => {
    const fish = ['angel','clown','drum','mandarin','sturgeon'];
    const removed = fish.splice(3,1);

    //
    //
    //

    check(removed instanceof Array, true);
    check(removed.length, 2);
    check(removed[0], "mandarin");
    check(removed[1], "sturgeon");
    
    check(months.length, 7);
    check(months[0], "angel");
    check(months[1], "clown");
    check(months[2], "drum");
    check(months[3], "sturgeon");
   
});

test('remove element from negative index', => {
    const fish = ['angel','clown','drum','mandarin','sturgeon'];
    const removed = fish.splice(-3,2);

    //
    // 
    //

    check(removed instanceof Array, true);
    check(removed.length, 2);
    check(removed[0], "drum");
    check(removed[1], "mandarin");
    
    check(months.length, 7);
    check(months[0], "angel");
    check(months[1], "clown");
    check(months[2], "sturgeon");
   
})
