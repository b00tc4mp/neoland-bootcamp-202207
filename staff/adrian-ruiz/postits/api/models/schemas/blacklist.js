const { Schema, Types: { ObjectId } } = require('mongoose')

const blacklist = new Schema({

    token: {
        type: String,
        required: true,   
    },

    blackListedAt: {
        type: Date,
        default : Date.now
    }
})

module.exports = blacklist