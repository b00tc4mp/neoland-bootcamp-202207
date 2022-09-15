const { Question, User } = require("../../../models");
const { DuplicityError, NotFoundError, SystemError } = require("errors");
const { validateString } = require("validators");

function retrieveQuestionsPublic() {
  // validateString

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

        delete question._id;

        delete question.__v;
      });

      return questions;
    });
}

module.exports = retrieveQuestionsPublic;
