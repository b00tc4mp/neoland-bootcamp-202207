// const { User,Place } = require("../../../models");
// const { Types: {ObjectId } } = require("mongoose")
// const { NotFoundError, SystemError } = require("errors");
// // const { validateString } = require("validators");
// const { verifyObjectIdString } = require("../../../utils");

// /**
//  * Creates a place for a user.
//  *
//  * @param {string} userId The user id.
//  *
//  * @returns {Promise}
//  *
//  * @throws {TypeError} If any of the arguments does not match the expected type.
//  * @throws {FormatError} If any of the arguments does not match the expected format.
//  *
//  * @throws {NotFoundError} If the user is not found.
//  * @throws {SystemError} If an error happens in db.
//  */

// function deleteFavoritesPlaces(userId, placeId) {
//   verifyObjectIdString(userId, "user id", placeId, "place id");

//   return User.findById(userId)
//     .lean()
//     .catch((error) => {
//       throw new SystemError(error.message);
//     })
//     .then((place) => {
//       if (!place)
//         throw new NotFoundError(`place with id ${placeId} not found`);

//       return Place.deleteOne({ 'places._id': ObjectId(placeId) }, 'places').catch((error) => {
//         throw new systemError(error.message);
//       });
//     })
//     .then((place) => {});
// }

// module.exports = deleteFavoritesPlaces;

// const { NotFoundError, AuthError, SystemError } = require("errors")
// const { User, City } = require("../../../models")
// const { verifyObjectIdString } = require("../../../utils")

// module.exports = function deleteFavoritesPlaces(userId, placeId) {
//     verifyObjectIdString(userId)
//     verifyObjectIdString(placeId)
   
// debugger

//     return User.findById(userId)
//         .catch(error => {
//             throw new SystemError(error.message)
//         })
      
//         .then(user => {
//             if (!user) throw new NotFoundError(`user with id ${userId} not found`)
//             return City.findById(placeId)
//                 .catch(error => {
//                     throw new SystemError(error.message)
//                 })
//         })

//         .then(place => {
//             if (!place) throw new NotFoundError(`place with id ${placeId} not found`)

//             // if (place.user.toString() !== userId) throw new AuthError(`place with id ${placeId} does not belong to user with id ${userId}`)

//             return City.deleteOne({ id: placeId })
//         })

//         .then(() => { })
// }