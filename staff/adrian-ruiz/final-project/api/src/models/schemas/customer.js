const { Schema, Types: { ObjectId } } = require('mongoose')

const customer = new Schema({
    company: {
        type: ObjectId,
        required: true,
        ref: 'Company'
    },

    name: {
        required: true,
        type: String
    },

    contactName: {
        firstName: {
            type: String,
        },
        lastName: {
            type: String
        },
    },

    email: {
        type: String,
    },

    phone: {
        type: Number
    },

    website: {
        type: String
    },

    legalId: {
        type: String
    },

    billingAddress: {
        street: {
            type: String,
        },
        town: {
            type: String,
        },
        state: {
            type: String,
        },
        zipCode: {
            type: String
        },
        country: {
            type: String
        },
    },

    shippingAddress: {
        street: {
            type: String,
        },
        town: {
            type: String,
        },
        state: {
            type: String,
        },
        zipCode: {
            type: Number
        },
        country: {
            type: String
        },
    },

    payTerms: {
        type: String,
        // TODO -> REF TO ANOTHER COLLECTION WITH TERMS
    }

    // TODO??? Account Number // Other settings: "Default Sales account / Default Discount / Credit Limit"
})

module.exports = customer
