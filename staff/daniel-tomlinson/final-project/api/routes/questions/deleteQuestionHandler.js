const {
  runWithErrorHandling,
  createLogger,
  verifyToken,
} = require("../../utils");
const {
  questions: { deleteQuestion },
} = require("../../logic");
const { NotFoundError } = require("errors");
const logger = createLogger(module);

module.exports = (req, res) => {
  runWithErrorHandling(
    () => {
      //   const userId = verifyToken(req);

      debugger;

      const {
        params: { questionId },
      } = req;

      deleteQuestion(
        // userId,
        questionId
      )
        .then(() => res.status(200).send())
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

/* ProductModel.deleteOne({ brand: "Nike" }, function (err) {
  if (err) console.log(err);
  console.log("Successful deletion");
}); */
