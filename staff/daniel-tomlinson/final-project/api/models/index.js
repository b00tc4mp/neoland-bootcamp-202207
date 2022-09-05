const { model } = require("mongoose");
const { user, question } = require("./schemas");

module.exports = {
  User: model("User", user),
  Question: model("Question", question),
};
