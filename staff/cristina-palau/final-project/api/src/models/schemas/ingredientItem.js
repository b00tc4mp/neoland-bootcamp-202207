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

    unit: { type: String,
        enum: ['kg', 'unit', 'l'], 
        required: true
    }
})

module.exports = ingredientItem
