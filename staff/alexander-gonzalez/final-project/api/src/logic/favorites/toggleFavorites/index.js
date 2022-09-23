//  // VALIDATE INPUTS

//     // FIND USER -> SI NO EXISTE MENSAJE ERROR
//     // FIND PLACE -> SI NO EXISTEN MENSAJE EROR

//     // CHECK IF USER HAS THE PLACE ID IN THEIR FAVORITES ARRAY
//     // IF IT IS IN THE ARRAY -> REMOVE IT --- ELSE -> ADD IT

//     // IF YOU HAVE REMOVED IT -> REMOVE IT FROM THE ARRAY OF FAVORITES OF PLACE
// const { User, Place } = require('../../models')
// const {  Types: { ObjectId } } = require("mongoose")
// const {verifyObjectIdString} = require('../../utils')
// const {validateString } = require('validators')
// const { NotFoundError, SystemError } = require('errors')


// function toggleFavorite(userId, placeId) {
//     return User.findById(userId)
//     .lean()
//     .catch((error) => {
//       throw new SystemError(error.message);
//     })
//     .then((user) => {
//       if (!user) throw new NotFoundError(`user with id ${userId} not found`);

//       return Place.findById(placeId)
//         .lean()
//         .catch((error) => {
//           throw new SystemError(error.message);
//         });
//     })
//     .then((place) => {
//       if (!place) throw new NotFoundError(`place with id ${placeId} not found`);

//       // sanitize

//       place.id = place._id.toString();
//       delete place._id;

//       delete place.__v;

//       return place;
//     });

//   }
   
    
//     const place = []

//     const index = place.favorites.findIndex(user => user.toString() === userId)

//     if(index === -1) {
//         place.favorites.push(userId)

//         user.favorites.push(placeId)
//     } else {
//         place.favorites.splice(index, 1)

//         const indexInUserArray = user.favorites.findIndex(place => place.toString() === placeId)

//         user.favorites.splice(indexInUserArray, 1)
//     }

//     place.save()
//     user.save()

//     module exports = toggle

const { User, City } = require("../../../models");
const { Types: { ObjectId } } = require("mongoose");
const { FormatError } = require("errors");
const {verifyObjectIdString} = require("../../../utils")

function toggleFavorites(userId, placeId) {
  verifyObjectIdString(userId, 'user id')
  verifyObjectIdString(placeId, 'place id')


  return (async () => {
    debugger
    const user = await User.findById(userId);

    if (!user) throw new NotFoundError(`user with id ${userId} not found`);

    const city = await City.findOne({ 'places._id': placeId }, 'places')

    if (!city) throw new NotFoundError(`place with id ${placeId} not found`)

    const place = city.places.find(place => place._id.toString() === placeId)

    const index = place.favorites.findIndex(user => user.toString() === userId)

    if(index === -1) {
        place.favorites.push(userId)

        user.favorites.push(placeId)
    } else {
        place.favorites.splice(index, 1)

        const indexInUserArray = user.favorites.findIndex(place => place.toString() === placeId)

        user.favorites.splice(indexInUserArray, 1)
    }

    await Promise.all([user.save(), city.save()])
  })();
}

module.exports = toggleFavorites;
