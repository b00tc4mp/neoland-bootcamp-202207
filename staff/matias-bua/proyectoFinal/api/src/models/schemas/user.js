const { Schema} = require('mongoose')

const user = new Schema({
    name:{
        type: String,
        required: true
    },

    lastname:{
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    birth:{
        type: Date,
        required: true
    },

    phoneNumber: {
        Type: Number,
    },

    gender: {
        Type: String,
        default: ''
    },

    city: {
        Type: String,
        default: ''
    },

    aboutYou: {
        Type: String,
        default: ''
    },
   
})

module.exports = user

       