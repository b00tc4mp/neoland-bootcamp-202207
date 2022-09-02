const { Schema, Types: { ObjectId } } = require('mongoose')

const note = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    text: {
        type: String,
        default: ''
    }
})

module.exports = note