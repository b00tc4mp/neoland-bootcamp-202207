describe("createNote", () => {
  beforeEach(() => {
    users.length = 0;
    notes.length = 0;
  });

  it("should succeed on existing user", () => {
    //happy path

    const crusty = {
      id: "user-" + Date.now(),
      name: "Crusty the Clown",
      email: "crusty@clown.us",
      password: "123123123",
    };

    users.push(crusty);

    const moe = {
      id: "user-" + "1234567890",
      name: "Moe Tavern",
      email: "moe@tavern.us",
      password: "123123123",
    };

    users.push(moe);

    const note1 = {
      id: "note-" + Date.now(),
      text: "hello world",
      user: crusty.id,
    };

    notes.push(note1);

    createNote(crusty.id, (error) => {
      expect(error).toBeNull();

      expect(notes.length).toBe(2);

      const note2 = notes[1];
      expect(note2.id).toBeDefined();
      expect(note2.text).toBe("");
      expect(note2.user).toBe(crusty.id);
    });
  });

  it("should fail on non-existent user", () => {
    //unhappy path
    const crusty = {
      id: "user-" + Date.now(),
      name: "Crusty the Clown",
      email: "crusty@clown.us",
      password: "123123123",
    };

    users.push(crusty);

    const moe = {
      id: "user-" + "1234567890",
      name: "Moe Tavern",
      email: "moe@tavern.us",
      password: "123123123",
    };

    users.push(moe);

    const note1 = {
      id: "note-" + Date.now(),
      text: "hello world",
      user: crusty.id,
    };

    notes.push(note1);

    const unknownUserId = "user-124578235689";

    createNote(unknownUserId, (error) => {
      expect(error).toBeInstanceOf(Error);

      expect(notes.length).toBe(1);
      expect(error.message).toBe(
        "user with id " + unknownUserId + " not found"
      );
    });
  });
});
