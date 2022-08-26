const mongoose = require('mongoose')
const { Schema, model, Types: { ObjectId } } = mongoose

module.exports = model('Notes', new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'Users' // linked
    },
    text: {
        type: String,
        default: ''
    }
}))