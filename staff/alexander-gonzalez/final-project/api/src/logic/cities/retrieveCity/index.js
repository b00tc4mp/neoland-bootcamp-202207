const { User, City } = require("../../../models");
const { NotFoundError, SystemError } = require("errors");
const { verifyObjectIdString } = require("../../../utils");
const { validateText } = require("validators");

function retrieveCity(userId, cityId) {
  verifyObjectIdString(userId, "user id");
  validateText(cityId, "city id");

  return User.findById(userId)
    .lean()
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((user) => {
      if (!user) throw new NotFoundError(`user with id ${userId} not found`);

      return City.findById(cityId)
        .lean()
        .catch((error) => {
          throw new SystemError(error.message);
        });
    })
    .then((city) => {
      if (!city) throw new NotFoundError(`city with id ${cityId} not found`);

      // sanitize

      city.id = city._id.toString();
      delete city._id;

      delete city.__v;

      return city;
    });
}

module.exports = retrieveCity;
