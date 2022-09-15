const { User } = require("../../../models");
const {
  Types: { ObjectId },
} = require("mongoose");
const { FormatError, AuthError } = require("errors");
const { validatePassword } = require("validators");

function updatePassword(userId, req) {
  if (!ObjectId.isValid(userId)) throw new FormatError("User is not valid");

  const {
    formId,
    updatedName,
    password,
    newEmail,
    oldPassword,
    newPassword,
    confirmNewPassword,
  } = req;

  // TODO: validate all inputs

  if (formId === "passwordForm") {
    validatePassword(oldPassword);
    validatePassword(newPassword);
  }
  //   validatePassword(confirmNewPassword);
  //   if (newPassword !== confirmNewPassword)
  //     throw new AuthError(
  //       "New password and confirm new password are not the same"
  //     );

  return (async () => {
    const foundUser = await User.findById(userId);

    if (formId === "passwordForm") {
      if (!foundUser || foundUser.password !== oldPassword)
        throw new AuthError(
          `User ${userId} does not exist or credentials are wrong`
        );
    }
    /* if (formId === "nameForm" || "emailForm") {
      if (!foundUser || foundUser.password !== password)
        throw new AuthError(
          `User ${userId} does not exist or credentials are wrong`
        );
    } */

    if (formId === "nameForm") {
      if (!foundUser || foundUser.password !== password)
        throw new AuthError(
          `User ${userId} does not exist or credentials are wrong`
        );
    }

    if (formId === "emailForm") {
      if (!foundUser || foundUser.password !== password)
        throw new AuthError(
          `User ${userId} does not exist or credentials are wrong`
        );
    }

    if (formId === "nameForm") foundUser.name = updatedName;
    if (formId === "passwordForm") foundUser.password = newPassword;
    if (formId === "emailForm") foundUser.email = newEmail;

    await foundUser.save();

    return;
  })();
}

module.exports = updatePassword;
