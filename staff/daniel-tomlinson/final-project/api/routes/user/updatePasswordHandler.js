const { runWithErrorHandling, verifyToken } = require("../../utils");
const {
  users: { updatePassword },
} = require("../../logic");
const logger = require("../../logger")(module);

function updatePasswordHandler(req, res) {
  runWithErrorHandling(
    async () => {
      debugger;
      const userId = await verifyToken(req);

      const {
        body: { oldPassword, password },
      } = req;

      await updatePassword(userId, oldPassword, password);

      res.status(204).send();

      logger.info(`User: ${userId} changed password succesfully`);
    },
    res,
    logger
  );
}

module.exports = updatePasswordHandler;
