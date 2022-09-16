const {
  runWithErrorHandling,
  createLogger,
  verifyToken,
} = require("../../utils");
const {
  questions: { retrieveQuestionsPublic },
} = require("../../logic");
const { NotFoundError } = require("errors");
const logger = createLogger(module);

module.exports = (req, res) => {
  runWithErrorHandling(
    () => {
      const userId = verifyToken(req);

      retrieveQuestionsPublic(userId)
        .then((questions) => {
          return res.json(questions);
        })

        .catch((error) => {
          //client not sending info so maybe client error here is not necessary
          // if (error instanceof NotFoundError)
          // res.status(401).json({ error: "wrong credentials" });

          if (error instanceof NotFoundError)
            res.status(401).json({ error: "no public questions found" });
          else res.status(500).json({ error: "system error" });

          logger.error(error);

          return;
        });
    },
    res,
    logger
  );
};
