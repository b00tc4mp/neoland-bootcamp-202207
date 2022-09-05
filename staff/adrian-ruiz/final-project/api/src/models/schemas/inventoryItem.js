const { Schema, Types: {ObjectId} } = require('mongoose')

const inventoryItem = new Schema({
    company: {
        type: ObjectId,
        required: true,
        ref: 'Company'
    },

    name: {
        type: String,
        required: true,
        //TODO -> I WOULD LIKE TO MAKE IT UNIQUE IN COMPANY, BUT IF I USE COMPANY, THEN WOULD BE CONFLICT IF 2 DIFERENT COMPANIES USE THE SAME NAME
    },

    sku: {
        type: String,
    },

    category: {
        type: String,
        required: true,
        default: 'uncategorized'
    },

    cost: {
        type: Number
    },

    // cost: Number,

    averageCost: {
        type: Number
    },

    description:{
        type: String
    },

    minStock: {
        type: Number
    },

    stock : {
        type: Number
    }

})

module.exports = inventoryItem