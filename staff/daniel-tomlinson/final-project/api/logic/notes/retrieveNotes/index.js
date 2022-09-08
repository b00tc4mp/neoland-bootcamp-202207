const { Note, User } = require("../../../models");
const { DuplicityError, NotFoundError, SystemError } = require("errors");
const { validateString } = require("validators");

function retrieveNotes(userId) {
  // validateString

  return User.findById(userId)
    .lean()
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((user) => {
      debugger;
      if (!user) throw new NotFoundError(`user with id ${userId} not found`);

      return Note.find({ user: userId }).catch((error) => {
        throw new NotFoundError(`no notes found for user with id ${userId}`);
      });
    })
    .then((notes) => {
      debugger;
      // TODO sanitize
      return notes;
    });
}

module.exports = retrieveNotes;
