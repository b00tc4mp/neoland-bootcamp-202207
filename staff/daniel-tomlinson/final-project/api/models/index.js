const { model } = require("mongoose");
const { user, note, gameCode } = require("./schemas");

module.exports = {
  User: model("User", user),
  Note: model("Note", note),
  GameCode: model("GameCode", gameCode),
};
