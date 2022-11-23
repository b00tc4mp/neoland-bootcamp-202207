// const { runWithErrorHandling,createLogger,verifyToken,} = require("../../utils");
// const { favorites: { deleteFavoritesPlaces }} = require("../../logic");
// const logger = createLogger(module);

// module.exports = (req, res) => {runWithErrorHandling(() => {
//       debugger;
//       const userId = verifyToken(req);
//       const { params: { placeId }  } = req;

//       return deleteFavoritesPlaces(userId, placeId).then(() =>
//         res.status(200).send()
//       );
//     }, res, logger);
// };
