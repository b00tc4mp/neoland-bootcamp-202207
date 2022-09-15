const {
  runWithErrorHandling,
  createLogger,
  verifyToken,
} = require("../../utils");
const {
  questions: { searchQuestionsPublic },
} = require("../../logic");
const logger = createLogger(module);

module.exports = (req, res) => {
  runWithErrorHandling(
    () => {
      const {
        query: { q: query },
      } = req;

      return (
        searchQuestionsPublic(query)
          // .then((questions) => res.status(200).json(questions))
          .then((questions) => res.json(questions))
          .catch((error) => {
            if (error instanceof NotFoundError)
              res.status(401).json({
                error: "no public questions found with search criteria",
              });
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
