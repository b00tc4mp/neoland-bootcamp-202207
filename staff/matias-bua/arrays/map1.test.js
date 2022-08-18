// Extraer un listado en un string, donde te muestre [Nombre, apeliido y (Edad)]

describe("mapObject", () => {
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
    const string = map(toString);

    check(string.length, people.length);
    check(string[0], "Peter Pan (15)");
    check(string[1], "James Hook (40)");
    check(string[2], "Pepito Grillo (50)");
    check(string[3], "Wendy Pan (14)");
    check(string[4], "Pin Ocho (10)");
  });
});
