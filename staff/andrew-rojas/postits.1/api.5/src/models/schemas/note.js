const { Schema, Types: { ObjectId } } = require("mongoose")

const note = new Schema({
  user: {
    type: ObjectId,
    required: true,
    ref: "User"
  },

  text: {
    type: String,
    default: ""
  },

  visibility: {
    Type: String,
    enum: ['private', 'public'],
    default: 'private'
  },

  createAt: {
    Type: Date,
    default: Date.now
  },

  modifiedAt: {
    Type: Date
  }
})

module.exports = note
