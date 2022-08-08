describe("map prototyp 2", () => {
  test("map people to strings", () => {
    const people = [
      { name: "Peter", surname: "Pan", age: 15 },
      { name: "James", surname: "Hook", age: 40 },
      { name: "Pepito", surname: "Grillo", age: 50 },
      { name: "Wendy", surname: "Pan", age: 14 },
      { name: "Pin", surname: "Ocho", age: 8 },
    ];

    const toString = function (person) {
      return person.name + " " + person.surname + " (" + person.age + ")";
    };
  });
});
