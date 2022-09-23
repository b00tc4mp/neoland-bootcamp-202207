const { runWithErrorHandling, verifyToken } = require("../../utils");
const{ favorites : {toggleFavorites} }= require("../../logic");
  const logger = require("../../utils/createLogger")(module);


function addFavoritesHandler(req, res) {
  runWithErrorHandling(
    async () => {
    
      const userId = await verifyToken(req);

      const { body: { placeId } } = req;

      await toggleFavorites(userId, placeId );

      res.status(204).send();

      logger.info(`User: ${userId} updated favorites succesfully`);
    },
    res,logger
  );
}

module.exports = addFavoritesHandler;