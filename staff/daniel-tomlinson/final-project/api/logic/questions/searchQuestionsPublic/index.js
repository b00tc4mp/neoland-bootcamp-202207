const { User, Question } = require("../../../models");
const { NotFoundError, SystemError } = require("errors");
const { verifyObjectIdString } = require("../../../utils");
const { validateString } = require("validators");

function searchQuestionsPublic(query) {
  validateString(query);

  return Question.find(
    { visibility: "public", question: { $regex: new RegExp(query) } },
    "question suggestedAnswer timeLimit visibility id"
  )
    .lean()
    .catch((error) => {
      throw new SystemError(error.message);
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

module.exports = searchQuestionsPublic;
