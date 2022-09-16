const { Question, User } = require("../../../models");
const { DuplicityError, NotFoundError, SystemError } = require("errors");
const { validateString } = require("validators");

function retrieveQuestionsPublic(userId) {
  // TODO verifyObjectId

  return User.findById(userId)
    .lean()
    .then((user) => {
      // TODO if (!user) throw ... user not found

      return Question.find(
        { visibility: "public" },
        "question suggestedAnswer timeLimit visibility id"
      )
        .lean()
        .catch((error) => {
          throw new NotFoundError(`no public questions found`);
        })
        .then((questions) => {
          questions.forEach((question) => {
            // sanitize

            question.id = question._id.toString();

            question.isFav = user.favorites.some(
              (questionId) => questionId.toString() === question.id
            );

            delete question._id;

            delete question.__v;
          });

          return questions;
        });
    });
}

module.exports = retrieveQuestionsPublic;
