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
});
