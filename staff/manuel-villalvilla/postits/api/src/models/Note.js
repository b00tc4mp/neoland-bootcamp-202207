const mongoose = require('mongoose')
const { Schema, model, Types: { ObjectId } } = mongoose

module.exports = model('Note', new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User' // linked
    },
    text: {
        type: String,
        default: ''
    },
    visibility: {
        type: String,
        enum: ['private', 'public'], // le dice a mongo q solo acepte esos dos valores
        default: 'private'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date
    }
}))