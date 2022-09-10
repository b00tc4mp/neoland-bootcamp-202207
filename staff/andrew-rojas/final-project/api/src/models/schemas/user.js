const { Schema } = require("mongoose")

const user = new Schema({
  name: {
    type: String,
    req: true
  },

  email: {
    type: String,
    req: true,
    unique: true
  },

  password: {
    type: String,
    req: true
  },

})

module.exports = user


//Hacer el usuario adm