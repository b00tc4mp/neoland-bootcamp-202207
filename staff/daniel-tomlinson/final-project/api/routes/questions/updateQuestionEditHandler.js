const {
  runWithErrorHandling,
  createLogger,
  verifyToken,
} = require("../../utils");
const {
  questions: { updateQuestionEdit },
} = require("../../logic");
const logger = createLogger(module);

module.exports = (req, res) => {
  runWithErrorHandling(
    () => {
      debugger;

      const userId = verifyToken(req);

      const {
        body: { question, suggestedAnswer, timeLimit, visibility },
        params: { questionId },
      } = req;

      return updateQuestionEdit(
        userId,
        questionId,
        question,
        suggestedAnswer,
        timeLimit,
        visibility
      ).then(() => res.status(204).send());
    },
    res,
    logger
  );
};
