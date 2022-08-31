const { User } = require("../../../models");
const { DuplicityError, SystemError } = require("../../../errors");
const {
  validateText,
  validateEmail,
  validatePassword,
} = require("../../../validators");

function registerUser(name, email, password) {
  debugger;
  validateText(name, "name");
  validateEmail(email);
  validatePassword(password);

  return User.create({ name, email, password })
    .then((user) => {})
    .catch((error) => {
      debugger;
      if (error.code === 11000) throw new DuplicityError("user already exists");

      throw new SystemError(error.message);
    });
}

module.exports = registerUser;
