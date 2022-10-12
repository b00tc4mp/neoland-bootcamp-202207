const { connect, disconnect } = require("mongoose");
const { User, Note } = require("../models");
const { retrieveNotes } = require(".");
const { DuplicityError, NotFoundError } = require("../errors");

describe("retrieveNotes", () => {
  beforeAll(() => connect("mongodb://127.0.0.1:27017/postits-test"));

  beforeEach(() => [User.deleteMany(), Note.deleteMany()]);

  it("succeeds on existing user with notes", () => {
    const name = "Pepito Grillo";
    const email = "pepito@grillo.com";
    const password = "123123123";

    return User.create({ name, email, password }).then((user) => {
      debugger;
      return Note.create({ user: user._id })

        .then(() => {
          debugger;
          return retrieveNotes(user._id);
        })

        .then((notes) => {
          expect(notes).toHaveLength(1);

          expect(notes[0].user.toString()).toEqual(user.id);
          expect(notes[0].text).toEqual("");
          expect(notes[0].visibility).toEqual("private");
          expect(notes[0].createAt).toBeInstanceOf(Date);
          expect(notes[0].modifiedAt).toBeUndefined();

          expect(notes[1].user.toString()).toEqual(user.id);
          expect(notes[1].text).toEqual("");
          expect(notes[1].visibility).toEqual("private");
          expect(notes[1].createAt).toBeInstanceOf(Date);
          expect(notes[1].modifiedAt).toBeUndefined();
        });
    });
  });

  afterAll(() => disconnect());
});
