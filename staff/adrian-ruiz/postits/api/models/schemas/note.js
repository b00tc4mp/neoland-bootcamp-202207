const { Schema, Types: { ObjectId } } = require('mongoose')

const note = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    
    title: {
        type: String,
        required: true,
    },

    text: {
        type: String,
        default: ''
    }
})

module.exports = note