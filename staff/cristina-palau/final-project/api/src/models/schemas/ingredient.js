const {Schema} = require('mongoose')

const ingredient = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },

    type: {
        type: String, 
        enum: ['Bebida', 'Bollería', 'Cacao', 'Café', 'Carne', 'Cereal', 'Conserva', 'Embutido', 'Fruta', 'Fruto Seco', 'Lácteo', 'Marisco', 'Legumbre', 'Pan', 'Pasta', 'Pescado', 'Picoteo', 'Refrigerado', 'Salsa', 'Vegetal', 'Veggie'   ],
        requred: true
    }
})

module.exports = ingredient