const { connect, disconnect } = require("mongoose");
const { User, Note } = require("../../../models");
const retrieveNotes = require(".");
const { DuplicityError, NotFoundError } = require("errors");

describe("retrieveNotes", () => {
  beforeAll(() => connect("mongodb://127.0.0.1:27017/postits-test"));

  beforeEach(() => [User.deleteMany(), Note.deleteMany()]);

  it("succeeds on existing user with notes", () => {
    const name = "Pepito Grillo";
    const email = "pepito@grillo.com";
    const password = "123123123";

    const text1 = "hola mundo";
    const text2 = "hello world";
    const text3 = "pryvit svit";

    // User.create() is the same as new User, then user.save()
    // This was done here to have to user accessible within the Promise.all

    const user = new User({ name, email, password });

    return Promise.all([
      user.save(),
      Note.create({ user: user._id, text: text1 }),
      Note.create({ user: user._id, text: text2 }),
      Note.create({ user: user._id, text: text3 }),
    ])
      .then(([user, note1, note2, note3]) => {
        debugger;
        // without {} this return would be implicit and not necessary
        return retrieveNotes(user.id);
      })
      .then((notes) => {
        expect(notes).toHaveLength(3);

        // We can't be sure what order the notes have been created in,
        // so we use a find here to match each note to a note in the db and then compare

        const _note1 = notes.find((note) => note.id === note1.id);
        expect(_note1).toBeDefined();
        expect(_note1.user).toEqual(user.id);
        expect(_note1.text).toEqual(note1.text);
        expect(_note1.visibility).toEqual(note1.visibility);
        expect(_note1.createdAt).toEqual(note1.createdAt);
        expect(_note1.modifiedAt).toBeUndefined();

        const _note2 = notes.find((note) => note.id === note2.id);
        expect(_note2).toBeDefined();
        expect(_note2.user).toEqual(user.id);
        expect(_note2.text).toEqual(note2.text);
        expect(_note2.visibility).toEqual(note2.visibility);
        expect(_note2.createdAt).toEqual(note2.createdAt);
        expect(_note2.modifiedAt).toBeUndefined();

        const _note3 = notes.find((note) => note.id === note3.id);
        expect(_note3).toBeDefined();
        expect(_note3.user).toEqual(user.id);
        expect(_note3.text).toEqual(note3.text);
        expect(_note3.visibility).toEqual(note3.visibility);
        expect(_note3.createdAt).toEqual(note3.createdAt);
        expect(_note3.modifiedAt).toBeUndefined();
      });
  });
  afterAll(() => disconnect());
});
