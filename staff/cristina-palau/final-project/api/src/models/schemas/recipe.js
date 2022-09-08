// const { Schema } = require('mongoose')

// const recipe = new Schema({
//     creator: {
//         type: ObjectId,
//         required: true,
//         ref: 'User'
//     },

//     title: {
//         type: String,
//         required: true,
//         default: "Nueva receta"
//     },

//     persons: {
//         type: Number,
//         required: true,
//     },

//     ingredients: [{
//         ingredient: {type: ObjectId, ref: 'Ingredient'},
//         quantity: {type: Number, required: true, default: 0},
//         quantityType: {type: String, enum: ['kg', 'un', 'l'], required: false}
//     }]
    
// })

// module.exports = recipe