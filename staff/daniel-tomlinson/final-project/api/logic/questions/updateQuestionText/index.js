const { NotFoundError, AuthError } = require("errors");
const { User, Question } = require("../../../models");
const { verifyObjectIdString } = require("../../../utils");
const { validateString } = require("validators");

function updateQuestionText(userId, questionId, text) {
  verifyObjectIdString(userId);
  verifyObjectIdString(questionId);
  validateString(text);

  return User.findById(userId)
    .then((user) => {
      if (!user) throw new NotFoundError(`user with id ${userId} not found`);

      return Question.findById(questionId);
    })
    .then((question) => {
      if (!question)
        throw new NotFoundError(`question with id ${questionId} not found`);

      if (question.user.toString() !== userId)
        throw new AuthError(
          `question with id ${questionId} does not belong to user with id ${userId}`
        );

      question.text = text;
      question.modifiedAt = Date.now();

      return question.save();
    })
    .then(() => {});
}

module.exports = updateQuestionText;
