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
      if (!user) throw new NotFoundError(`user with id ${userId} not found`);

      return Question.find({ user: userId })
        .lean()
        .catch((error) => {
          throw new NotFoundError(
            `no questions found for user with id ${userId}`
          );
        });
    })
    .then((questions) => {
      questions.forEach((question) => {
        // sanitize

        question.id = question._id.toString();

        delete question._id;

        delete question.__v;
      });

      return questions;
    });
}

module.exports = retrieveQuestions;
