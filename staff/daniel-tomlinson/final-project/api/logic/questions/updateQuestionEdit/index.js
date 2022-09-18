const { NotFoundError, AuthError } = require("errors");
const { User, Question } = require("../../../models");
const { verifyObjectIdString } = require("../../../utils");
const { validateString } = require("validators");

function updateQuestionEdit(
  userId,
  questionId,
  /* text,
  suggestedAnswer,
  timeLimit,
  visibility */
  text,
  timeLimit,
  visibility,
  questionType,
  suggestedAnswer,
  answerA,
  answerB,
  answerC,
  answerD
) {
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
      debugger;
      question.question = text;
      question.timeLimit = timeLimit;
      question.visibility = visibility;
      question.modifiedAt = Date.now();
      question.questionType = questionType;
      question.suggestedAnswer = suggestedAnswer;
      question.answerA = answerA;
      question.answerB = answerB;
      question.answerC = answerC;
      question.answerD = answerD;

      return question.save();
    })
    .then(() => {});
}

module.exports = updateQuestionEdit;
