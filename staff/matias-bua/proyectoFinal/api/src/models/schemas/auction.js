const { Schema, Types: { ObjectId } } = require('mongoose')
const bid = require('./bid')

const auction = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    
    productName: {  
        type: String,
        default: ''
    },

    title: {
        type: String,
        requred: true,
        default: ''
    },

    // category: {
    //     type: String,
    //     default: ''
    // },

    // subCategory: {
    //     type: String,
    //     default: ''
    // },

    description: {
        type: String,
        default: ''
    },

    dateForBit: {
        type: Date,
        required: true
    },

    value: {
        type: Number,
        //type: String,
        required: true
    },
    
    bids: [bid]
    ,
    image: {
        type: String,
    },
    
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
})

module.exports = auction


// currency: {
//    type: String,
//    enum: ['euro', 'american dollar', 'pound']
// }