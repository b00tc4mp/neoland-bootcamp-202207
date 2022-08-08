describe("TEST: filter", function () {
    test("Pan family", function ( {

        const people = [
          { name: "Peter", surname: "Pan" },
          { name: "Wendy", surname: "Pan" },
          { name: "James", surname: "Pan" },
          { name: "Pepito", surname: "Grillo" },
          { name: "Pinocho", surname: "Grillo" },
        ]
        const pans = people.filter(function(person)) {
            return person.surname === "Pan"

            check(pans.length, 2)
            check(pans[0], people [0])
            check(pans[1], people[3])
        }
    }))

})


