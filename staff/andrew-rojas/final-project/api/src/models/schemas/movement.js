const { Schema, Types: { ObjectId } } = require("mongoose")

const movement = new Schema ({

  product: {
    type: ObjectId,
    required: true,
    ref: "User"
  },

  category: {
    type: String,
    required: true
  },

  quantity: {
    type: Number,
    required: true
  },

  movement: {
    type: String,
    required: true
  },

  createAt: {
    type: Date,
    default: Date.now
  },

 modifiedAt: {
    type: Date
 }

})

module.exports = movement