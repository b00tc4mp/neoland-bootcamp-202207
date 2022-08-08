describe("retrieveNotes", () => {
  beforeEach(() => {
    users.length = 0;
    notes.length = 0;
  });

  it("returns notes for an existing user with notes", () => {
    const magGie = {
      id: "user-123",
      name: "Mag Gie",
      email: "mag@gie.com",
      password: "123123123",
    };

    const liSa = {
      id: "user-234",
      name: "Li Sa",
      email: "li@sa.com",
      password: "123123123",
    };

    users.push(magGie, liSa);

    const note1 = {
      id: "note-345",
      text: "hola mundo",
      user: magGie.id,
    };

    const note2 = {
      id: "note-23423425",
      text: "hello world",
      user: magGie.id,
    };

    const note3 = {
      id: "note-23423425",
      text: "ciao mondo",
      user: liSa.id,
    };

    notes.push(note1, note3, note2);

    retrieveNotes(magGie.id, (error, notes) => {
      expect(error).toBeNull();

      expect(notes).toBeInstanceOf(Array);
      expect(notes.length).toBe(2);
    });
  });

  it("returns error for a non-existing user", () => {
    const magGie = {
      id: "user-123",
      name: "Mag Gie",
      email: "mag@gie.com",
      password: "123123123",
    };

    const liSa = {
      id: "user-234",
      name: "Li Sa",
      email: "li@sa.com",
      password: "123123123",
    };

    users.push(magGie, liSa);

    const note1 = {
      id: "note-345",
      text: "hola mundo",
      user: magGie.id,
    };

    const note2 = {
      id: "note-23423425",
      text: "hello world",
      user: magGie.id,
    };

    const note3 = {
      id: "note-23423425",
      text: "ciao mondo",
      user: liSa.id,
    };

    notes.push(note1, note3, note2);

    const unknownUserId = "user-567";

    retrieveNotes(unknownUserId, (error, notes) => {
      expect(error).toBeInstanceOf(Error);

      expect(error.message).toBe(
        "user with id " + unknownUserId + " not found"
      );
      expect(notes).toBeUndefined();
    });
  });
});
