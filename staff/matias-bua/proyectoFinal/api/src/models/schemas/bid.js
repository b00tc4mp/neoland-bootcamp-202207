const { Schema, Types: { ObjectId } } = require('mongoose')

const bid = new Schema({
    user: {
        type: ObjectId,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    dateBid: {
        type: Date,
        default: Date.now
    },
})

module.exports = bid


