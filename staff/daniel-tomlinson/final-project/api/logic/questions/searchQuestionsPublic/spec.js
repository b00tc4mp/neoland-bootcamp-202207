require("dotenv").config();

const {
  connect,
  disconnect,
  Types: { ObjectId },
} = require("mongoose");
const { User, Note } = require("../../../models");
const { NotFoundError } = require("errors");
const searchNotes = require(".");

const { MONGO_URL_TEST } = process.env;

describe("searchNotes", () => {
  beforeAll(() => connect(MONGO_URL_TEST));

  beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]));

  it("succeeds on existing user and notes", () => {
    // happy path
    const name = "Pepito Grillo";
    const email = "pepito@grillo.com";
    const password = "123123123";

    const text1 = "hola mundo";
    const text2 = "hello world";
    const text3 = "pryvit svit";

    const user = new User({ name, email, password });

    const query = "pr";

    return Promise.all([
      user.save(),
      Note.create({ user: user.id, text: text1 }), // create() -> new, save()
      Note.create({ user: user.id, text: text2 }),
      Note.create({ user: user.id, text: text3 }),
    ]).then(([user, note1, note2, note3]) =>
      searchNotes(user.id, query).then((notes) => {
        expect(notes).toHaveLength(1);

        const [note] = notes;

        expect(note).toBeDefined();
        expect(note.user).toBeUndefined();
        expect(note.text).toEqual(note3.text);
        expect(note.visibility).toEqual(note3.visibility);
        expect(note.createdAt).toEqual(note3.createdAt);
        expect(note.modifiedAt).toBeUndefined();
      })
    );
  });

  it("fails on non-existing user", () => {
    // unhappy path
    const userId = new ObjectId().toString();

    const query = "pr";

    return searchNotes(userId, query).catch((error) => {
      expect(error).toBeInstanceOf(NotFoundError);
      expect(error.message).toEqual(`user with id ${userId} not found`);
    });
  });

  afterAll(() => disconnect());
});
