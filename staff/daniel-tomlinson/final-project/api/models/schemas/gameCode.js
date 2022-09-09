const {
  Schema,
  Types: { ObjectId },
} = require("mongoose");

const gameCode = new Schema({
  nameOfClass: {
    type: String,
    // default: "",
    required: true,
  },

  pin: {
    type: String,
    // default: "",
    required: true,
  },

  createAt: {
    type: Date,
    default: Date.now,
  },

  modifiedAt: {
    type: Date,
  },
});

module.exports = gameCode;
