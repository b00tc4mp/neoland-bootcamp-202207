const { Schema, Types: { ObjectId } } = require("mongoose")

const product = new Schema ({
  user: {
    type: ObjectId,
    req: true,
    ref: "User"
  },

  productName: {
    type: String,
    req: true,
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

  description: {
    type: String,
    default: ""
  },

   createAt: {
     type: Date,
     default: Date.now
   },

  modifiedAt: {
     type: Date
  }
})

module.exports = product