const { Schema, Types: { ObjectId } } = require('mongoose')

const order = new Schema({
    user: {
        type: ObjectId,
        required: true
    },
    cart: {
        ref: 'Cart'
    },
    date: {
        type: Date,
        required: true
    },
    paymentAddress: { ref: 'Address' },
    shippingAddress: { ref: 'Address' },
    paymentMethod:{
        type:String,
        enum:['credit card','paypal']
    }

})

module.exports = order