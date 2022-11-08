const { User, Place, City } = require("../../../models");
const { NotFoundError, SystemError } = require("errors");
const { verifyObjectIdString } = require("../../../utils");
const { validateText } = require("validators");
const {mongoose} = require("mongoose")

function retrieveFavoritePlaces(userId) {
  verifyObjectIdString(userId, "user id");


  return User.findById(userId)
    .lean()
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((user) => {
      if (!user) throw new NotFoundError(`user with id ${userId} not found`);

      return City.find()
        .lean()
        .catch((error) => {
          throw new SystemError(error.message);
        })
        .then((cities) => {
          const placesArray = [];

          cities.forEach((city) => {
            for (let i = 0; i < city.places.length; i++)
              placesArray.push(city.places[i]);
          });
          return placesArray;
        })
        .then((places) => {
          const favoritesArray = [];

          places.forEach((place) => {
           
            for (let i = 0; i < place.favorites.length; i++) {
              if (place.favorites[i].toString() === userId)

              favoritesArray.push(place);
            }

          });

          return favoritesArray;
        })
        .then((favoritePlaces) => {
          if (!favoritePlaces)
            throw new NotFoundError(`no favorite places found`);

          // sanitize
          
          favoritePlaces.forEach((place) => {
            place.id = place._id.toString();
            delete place._id;

            delete place.__v;
          });

          return favoritePlaces;
        });
    });
}

module.exports = retrieveFavoritePlaces;
