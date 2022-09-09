const {
  runWithErrorHandling,
  createLogger,
  verifyToken,
} = require("../../utils");
const {
  //game here didn't work - written as games in the logic index
  gameCodes: { createGameCode },
} = require("../../logic");
const { NotFoundError } = require("errors");
const logger = createLogger(module);

module.exports = (req, res) => {
  runWithErrorHandling(
    () => {
      const userId = verifyToken(req);

      const {
        body: { nameOfClass, pin },
      } = req;

      createGameCode(userId, nameOfClass, pin)
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
