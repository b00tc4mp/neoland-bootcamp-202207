describe("Filter", function () {
  test("filter pan family", function () {
    const people = [
      { name: "Peter", surname: "pan", age: 15 },
      { name: "James", surname: "hook", age: 40 },
      { name: "Pepito", surname: "grillo", age: 50 },
      { name: "Wendy", surname: "pan", age: 14 },
      { name: "Pin", surname: "ocho", age: 8 },
    ];

    const pans = filter(people, function (person) {
      return person.surname === "pan";
    });
    check(pans.length, 2);
    check(pans[0], people[0]);
    check(pans[1], people[3]);
  });

  test("filter by age >= 18", function () {
    const people = [
      { name: "Peter", surname: "pan", age: 15 },
      { name: "James", surname: "hook", age: 40 },
      { name: "Pepito", surname: "grillo", age: 50 },
      { name: "Wendy", surname: "pan", age: 14 },
      { name: "Pin", surname: "ocho", age: 8 },
    ];

    const olderthan18 = filter(people, function (person) {
      return person.age >= 18;
    });
    check(olderthan18.length, 2);
    check(olderthan18[0], people[1]);
    check(olderthan18[1], people[2]);
  });
});
