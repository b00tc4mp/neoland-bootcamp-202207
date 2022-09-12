const {
  Schema,
  Types: { ObjectId },
} = require("mongoose");

const question = new Schema({
  user: {
    type: ObjectId,
    required: true,
    ref: "User",
  },

  question: {
    type: String,
    default: "",
    required: true,
  },

  suggestedAnswer: {
    type: String,
    default: "",
  },

  timeLimit: {
    type: Number,
    default: 30000,
  },

  visibility: {
    type: String,
    enum: ["private", "public"],
    default: "public",
  },

  createAt: {
    type: Date,
    default: Date.now,
  },

  modifiedAt: {
    type: Date,
  },
});

module.exports = question;
