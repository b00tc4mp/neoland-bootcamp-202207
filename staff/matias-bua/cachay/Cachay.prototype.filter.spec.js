describe("Cachay.prototype.filter", function () {
  it("filter pan family", function () {
    const people = new Cachay(
      { name: "Peter", surname: "Pan", age: 15 },
      { name: "James", surname: "Hook", age: 40 },
      { name: "Pepito", surname: "Grillo", age: 50 },
      { name: "Wendy", surname: "Pan", age: 14 },
      { name: "Pin", surname: "Ocho", age: 8 }
    );

    const pans = people.filter(function (person) {
      return person.surname === "Pan";
    });

    expect(pans.length).to.equal(2);
    expect(pans[0]).to.equal(people[0]);
    expect(pans[1]).to.equal(people[3]);
  });

  it("filter by age >= 18", function () {
    const people = new Cachay(
      { name: "Peter", surname: "pan", age: 15 },
      { name: "James", surname: "hook", age: 40 },
      { name: "Pepito", surname: "grillo", age: 50 },
      { name: "Wendy", surname: "pan", age: 14 },
      { name: "Pin", surname: "ocho", age: 8 }
    );

    const olderthan18 = filter(people, function (person) {
      return person.age >= 18;
    });
    expect(olderthan18.length), 2;
    expect(olderthan18[0]).to.equal(people[1]);
    expect(olderthan18[1]).to.equal(people[2]);
  });
});
