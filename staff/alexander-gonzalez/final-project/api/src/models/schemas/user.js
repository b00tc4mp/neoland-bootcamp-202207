const { Schema, Types: {ObjectId} } = require('mongoose')

const user = new Schema({
    name: {
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
    favorites: {
        type: [ObjectId],
        ref: 'Places'
    }
})

module.exports = user