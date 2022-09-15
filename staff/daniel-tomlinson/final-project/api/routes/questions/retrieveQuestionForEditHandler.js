const { NotFoundError, AuthError } = require("errors");

const {
  runWithErrorHandling,
  createLogger,
  verifyToken,
} = require("../../utils");
const {
  questions: { retrieveQuestionForEdit },
} = require("../../logic");
const logger = createLogger(module);

module.exports = (req, res) => {
  runWithErrorHandling(
    () => {
      const userId = verifyToken(req);

      const {
        params: { questionId },
      } = req;

      return retrieveQuestionForEdit(userId, questionId)
        .then((question) => res.status(200).json(question))
        .catch((error) => {
          if (error instanceof NotFoundError || error instanceof AuthError)
            //TODO update this error handling
            res.status(401).json({ error: "wrong credentials" });
          else res.status(500).json({ error: "system error" });

          logger.error(error);

          return;
        });
    },
    res,
    logger
  );
};
