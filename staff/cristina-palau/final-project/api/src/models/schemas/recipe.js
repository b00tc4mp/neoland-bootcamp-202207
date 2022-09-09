const { Schema, Types: {ObjectId} } = require('mongoose')
const ingredientItem = require('./ingredientItem')

const recipe = new Schema({
    creator: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    title: {
        type: String,
        required: true,
        default: "Nueva receta"
    },

    persons: {
        type: Number,
        required: true,
    },

    ingredients: [ingredientItem]
})

module.exports = recipe