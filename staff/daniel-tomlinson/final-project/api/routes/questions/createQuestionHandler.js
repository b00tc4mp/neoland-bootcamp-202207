const {
  runWithErrorHandling,
  createLogger,
  verifyToken,
} = require("../../utils");
const {
  questions: { createQuestion },
} = require("../../logic");
const { NotFoundError } = require("errors");
const logger = createLogger(module);

module.exports = (req, res) => {
  runWithErrorHandling(
    () => {
      const userId = verifyToken(req);
      console.log("userId:");
      console.log(userId);

      const {
        // body: { question, suggestedAnswer, timeLimit, visibility },
        body: {
          question,
          timeLimit,
          visibility,
          questionType,
          suggestedAnswer,
          answerA,
          answerB,
          answerC,
          answerD,
        },
      } = req;

      // createQuestion(userId, question, suggestedAnswer, timeLimit, visibility)
      createQuestion(
        userId,
        question,
        timeLimit,
        visibility,
        questionType,
        suggestedAnswer,
        answerA,
        answerB,
        answerC,
        answerD
      )
        .then(() => res.status(201).send())
        .catch((error) => {
          if (error instanceof NotFoundError)
            res.status(404).json({ error: error.message });
          else res.status(500).json({ error: "system error" });

          logger.error(error);

          return;
        });
    },
    res,
    logger
  );
};
