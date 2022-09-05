const { Schema } = require("mongoose");

const user = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  favouriteQuestions: {
    type: Array,
    default: [],
  },

  favouriteQuizzes: {
    type: Array,
    default: [],
  },
});

module.exports = user;
