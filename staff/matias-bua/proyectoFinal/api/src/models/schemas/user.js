const { Schema} = require('mongoose')

const user = new Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    lastname:{
        type: String,
        // required: true
    },
    password: {
        type: String,
        required: true
    },
    birth:{
        type: String,
    },
    phoneNumber: {
        Type: Number
    }
    // Saved:{
    //     type: ObjectId
    // }
})

module.exports = user