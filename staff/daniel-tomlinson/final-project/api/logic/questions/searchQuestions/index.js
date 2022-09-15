const { User, Question } = require("../../../models");
const { NotFoundError, SystemError } = require("errors");
const { verifyObjectIdString } = require("../../../utils");
const { validateString } = require("validators");

function searchQuestions(userId, query) {
  verifyObjectIdString(userId, "user id");
  validateString(query);

  return User.findById(userId)
    .lean()
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((user) => {
      if (!user) throw new NotFoundError(`user with id ${userId} not found`);

      return Question.find(
        { user: userId, question: { $regex: new RegExp(query) } },
        "question suggestedAnswer timeLimit visibility id"
      )
        .lean()
        .catch((error) => {
          throw new SystemError(error.message);
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

module.exports = searchQuestions;
