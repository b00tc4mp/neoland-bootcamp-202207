const { Schema, Types: { ObjectId } } = require('mongoose')

const ingredientItem = new Schema({
    ingredient: { 
        type: ObjectId, 
        ref: 'Ingredient' 
    },
    
    quantity: { 
        type: Number, 
        required: true, 
        default: 0 
    },

    units: { type: String,
        enum: ['kg', 'un', 'l'], 
        required: false 
    }
})

module.exports = ingredientItem
