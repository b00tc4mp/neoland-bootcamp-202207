const { Schema } = require('mongoose')

const user = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        requiered: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
})

module.exports = user