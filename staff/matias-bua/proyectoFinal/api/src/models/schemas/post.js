const { Schema, Types: { ObjectId } } = require('mongoose')

const post = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    text: {
        type: String,
        default: ''
    },

    // visibility: {
    //     type: String,
    //     enum: ['private', 'public'],
    //     default: 'private'
    // },

    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = post