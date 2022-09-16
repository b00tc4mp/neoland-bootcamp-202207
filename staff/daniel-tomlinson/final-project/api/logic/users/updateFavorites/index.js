const { User } = require("../../../models");
const {
  Types: { ObjectId },
} = require("mongoose");
const { FormatError, AuthError } = require("errors");
const { validatePassword } = require("validators");

function updateFavorites(userId, questionId, action) {
  debugger;
  if (!ObjectId.isValid(userId)) throw new FormatError("User is not valid");
  //   validatePassword(oldPassword);
  //   validatePassword(password);
  //   validatePassword(confirmNewPassword);
  //   if (newPassword !== confirmNewPassword)
  //     throw new AuthError(
  //       "New password and confirm new password are not the same"
  //     );

  return (async () => {
    const foundUser = await User.findById(userId);

    // if (!foundUser || foundUser.password !== oldPassword)
    //   throw new AuthError(
    //     `User ${userId} does not exist or credentials are wrong`
    //   );

    if (action === "add")
      foundUser.favorites[foundUser.favorites.length] = questionId;

    if (action === "remove") {
      const newFavorites = foundUser.favorites.filter(
        (favorite) => favorite !== questionId
      );
      foundUser.favorites = newFavorites;
    }

    await foundUser.save();

    return;
  })();
}

module.exports = updateFavorites;
