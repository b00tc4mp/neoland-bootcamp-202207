const {
  Schema,
  Types: { ObjectId },
} = require("mongoose");

const question = new Schema({
  owner: {
    type: ObjectId,
    required: true,
    ref: "User",
  },

  question: {
    type: String,
    required: true,
    default: "",
  },

  suggestedAnswer: {
    type: String,
    default: "",
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

  tags: {
    type: Array,
    default: [],
  },

  likes: {
    type: Number,
    default: 0,
  },

  plays: {
    type: Number,
    default: 0,
  },
});

module.exports = question;
