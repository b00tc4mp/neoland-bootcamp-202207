const { Schema, Types: {ObjectId} } = require('mongoose')
const ingredientItem = require('./ingredientItem')

const list = new Schema({
    creator: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    title: {
        type: String,
        required: false,
        default: "Nueva receta"
    },

    ingredients: [ingredientItem], 
    
    createAt: {
        type: Date,
        default: Date.now
    },

    modifiedAt: {
        type: Date
    }
})

module.exports = list