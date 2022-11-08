const { runWithErrorHandling, verifyToken } = require("../../utils");
const{ favorites : {toggleFavorites} }= require("../../logic");
  const logger = require("../../utils/createLogger")(module);


function toggleFavoritesPlaceHandler(req, res) {
  runWithErrorHandling(
    async () => {
    
      const userId = await verifyToken(req);

      const { body: { placeId } } = req;

      const place = await toggleFavorites(userId, placeId );
     
      res.status(204).send(place);

      

      logger.info(`User: ${userId} updated favorites succesfully`);
    },
    res,logger
  );
}

module.exports = toggleFavoritesPlaceHandler;