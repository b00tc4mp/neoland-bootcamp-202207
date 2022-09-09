const {Schema} = require('mongoose')

const product = new Schema({
  name:{
    type:String,
    require:true
  },
  sku:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  discount:{
    type:Number,
    required: true,
    default:0
  },
  stock:{
    type:Number,
    required:true
  }
})

module.exports = product