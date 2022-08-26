const { Schema, model, Types : {ObjectId} } = require('mongoose')

const user = new Schema({
    name:{
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})

const User = model('User', user)

module.exports = User