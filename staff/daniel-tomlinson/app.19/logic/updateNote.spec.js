describe("updateNote", () => {
  beforeEach(() => {
    users.length = 0;
    notes.length = 0;
  });

  it("succeeds for an existing", () => {
    const willSmith = {
      id: "user-" + Date.now(),
      name: "Will Smith",
      email: "will@smith.com",
      password: "123123123",
    };

    users.push(willSmith);

    const carlTon = {
      id: "1234567890",
      name: "Carl Ton",
      email: "carl@ton.com",
      password: "123123123",
    };

    users.push(carlTon);

    const note1 = {
      id: "note-" + Date.now(),
      text: " Now, this is a story all about how.",
      user: willSmith.id,
    };

    notes.push(note1);

    updateNote(
      willSmith.id,
      note1.id,
      "My life got flipped-turned upside down",
      (error) => {
        expect(error).toBeNull();

        expect(notes.length).toBe(1);

        const note1 = notes[0];
        expect(note1.id).toBeDefined();
        expect(note1.text).toBe("My life got flipped-turned upside down");
        expect(note1.user).toBe(willSmith.id);
      }
    );
  });

  it("fails for a non-existent user", () => {
    const poRoto = {
      id: "user-" + Date.now(),
      name: "Po Roto",
      email: "po@roto.com",
      password: "123123123",
    };

    users.push(poRoto);

    const peLudo = {
      id: "user-" + Date.now(),
      name: "Pe Ludo",
      email: "pe@ludo.com",
      password: "123123123",
    };

    users.push(peLudo);

    const note1 = {
      id: "note-" + Date.now(),
      text: "hello world",
      user: peLudo.id,
    };

    notes.push(note1);

    const unknownUserId = "user-123123213";

    updateNote(unknownUserId, note1.id, "hola mundo", (error) => {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(
        "user with id " + unknownUserId + " not found"
      );
    });
  });

  it("fails for a non-existent note", () => {
    const poRoto = {
      id: "user-" + Date.now(),
      name: "Po Roto",
      email: "po@roto.com",
      password: "123123123",
    };

    users.push(poRoto);

    const peLudo = {
      id: "user-" + Date.now(),
      name: "Pe Ludo",
      email: "pe@ludo.com",
      password: "123123123",
    };

    users.push(peLudo);

    const note1 = {
      id: "note-" + Date.now(),
      text: "hello world",
      user: peLudo.id,
    };

    notes.push(note1);

    const unknownNoteId = "note-123123213";

    updateNote(peLudo.id, unknownNoteId, "hola mundo", (error) => {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(
        "note with id " + unknownNoteId + " not found"
      );
    });
  });

  it("fails for a incorrect user (note does not belong to him)", () => {
    const poRoto = {
      id: "user-" + 1232342343124,
      name: "Po Roto",
      email: "po@roto.com",
      password: "123123123",
    };

    users.push(poRoto);

    const peLudo = {
      id: "user-" + Date.now(),
      name: "Pe Ludo",
      email: "pe@ludo.com",
      password: "123123123",
    };

    users.push(peLudo);

    const note1 = {
      id: "note-" + Date.now(),
      text: "hello world",
      user: peLudo.id,
    };

    notes.push(note1);

    updateNote(poRoto.id, note1.id, "hola mundo", (error) => {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(
        "note with id " +
          note1.id +
          " does not belong to user with id " +
          poRoto.id
      );
    });
  });
});
