const {Schema} = require('mongoose')

const cart = new Schema({
  items:[Item]
})

module.exports = cart