const { Schema, Types : { ObjectId } } = require('mongoose')

const estimate = new Schema({
    company:{
        type: ObjectId,
        required: true,
        ref: 'Company'
    },

    estimateNumber: {
        type: String,
        required: true
    },

    customer:{  
        required: true,
        ref: 'Customer'
    },

    terms: {
        type: String,
        required : true
        // TODO, HOW TO REF ANOTHER COLLECTIONS ( TODO ) AND MAKE ONLY OPTIONS AVAILABLE FROM THAT
    },

    estimateDate: {
        type: Date,
        required: true
    },

    products: {
        // TODO, HOW TO REF / SET RULES TO GET ARRAY OF PRODUCTS WITH ITS VALUES(QTY, PRICE, TAX...) ??
    },

    totalAmount: {
        type: Number,
        required: true,
    },

    status : {
        type: String,
        required: true,
        enum: ['Accepted', 'Rejected', 'Pending'],
        default: 'Pending'
    }
})

module.exports = estimate