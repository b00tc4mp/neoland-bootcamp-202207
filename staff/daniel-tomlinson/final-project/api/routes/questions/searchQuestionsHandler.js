const {
  runWithErrorHandling,
  createLogger,
  verifyToken,
} = require("../../utils");
const {
  questions: { searchQuestions },
} = require("../../logic");
const logger = createLogger(module);

module.exports = (req, res) => {
  runWithErrorHandling(
    () => {
      debugger;
      const userId = verifyToken(req);

      const {
        query: { q: query },
      } = req;

      return (
        searchQuestions(userId, query)
          // .then((questions) => res.status(200).json(questions))
          .then((questions) => res.json(questions))
          .catch((error) => {
            if (error instanceof NotFoundError || error instanceof AuthError)
              res.status(401).json({ error: "wrong credentials" });
            else res.status(500).json({ error: "system error" });

            logger.error(error);

            return;
          })
      );
    },
    res,
    logger
  );
};
