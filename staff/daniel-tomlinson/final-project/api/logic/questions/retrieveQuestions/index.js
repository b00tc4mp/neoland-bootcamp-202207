const { Question, User } = require("../../../models");
const { DuplicityError, NotFoundError, SystemError } = require("errors");
const { validateString } = require("validators");

function retrieveQuestions(userId) {
  // validateString

  return User.findById(userId)
    .lean()
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((user) => {
      debugger;
      if (!user) throw new NotFoundError(`user with id ${userId} not found`);

      return Question.find({ user: userId }).catch((error) => {
        throw new NotFoundError(
          `no questions found for user with id ${userId}`
        );
      });
    })
    .then((questions) => {
      debugger;
      // TODO sanitize
      return questions;
    });
}

module.exports = retrieveQuestions;
