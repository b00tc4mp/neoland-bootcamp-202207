

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