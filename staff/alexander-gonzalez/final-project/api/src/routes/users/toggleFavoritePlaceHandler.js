const { runWithErrorHandling, verifyToken } = require("../../utils");
const{ favorites : {toggleFavorites} }= require("../../logic");
  const logger = require("../../utils/createLogger")(module);


function toggleFavoritesPlaceHandler(req, res) {
  runWithErrorHandling(
    async () => {
    
      const userId = await verifyToken(req);

      const { body: { placeId } } = req;

      const place = await toggleFavorites(userId, placeId );
     
      console.log(place)

      res.status(200).send(place);

      

      logger.info(`User: ${userId} updated favorites succesfully`);
    },
    res,logger
  );
}

module.exports = toggleFavoritesPlaceHandler;