const mongoose = require('mongoose')
const { Schema, model, Types: { ObjectId } } = mongoose

module.exports = model('Ad', new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User' // linked
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    visibility: {
        type: String,
        enum: ['private', 'public'], // le dice a mongo q solo acepte esos dos valores
        default: 'public'
    },
    verified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date
    }
}))