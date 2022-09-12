const { User, GameCode } = require("../../../models");
const { DuplicityError, NotFoundError, SystemError } = require("errors");
const { validateString } = require("validators");

function retrieveGameCode(pin) {
  // validateString

  /* return User.findById(userId)
    .lean()
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((user) => {
      debugger;
      if (!user) throw new NotFoundError(`user with id ${userId} not found`);

      return  */

  return GameCode.find(pin)
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((gameCodes) => gameCodes)
    .catch((error) => {
      throw new NotFoundError(`no open games match the details entered`);
    });
  /* GameCode.find({ user: userId }).catch((error) => {
    throw new NotFoundError(`no game codes found for user with id ${userId}`);
  }); */
} /* )
    .then((gameCodes) => {
      debugger;
      // TODO sanitize
      return gameCodes;
    });
} */

module.exports = retrieveGameCode;
