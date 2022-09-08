const {
  runWithErrorHandling,
  createLogger,
  verifyToken,
} = require("../../utils");
const {
  notes: { retrieveNotes },
} = require("../../logic");
const { NotFoundError, AuthError } = require("errors");
const logger = createLogger(module);

module.exports = (req, res) => {
  runWithErrorHandling(
    () => {
      const userId = verifyToken(req);

      retrieveNotes(userId)
        .then((notes) => res.json(notes))
        .catch((error) => {
          if (error instanceof NotFoundError || error instanceof AuthError)
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
