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
            required: true
        },
        lastName: {
            type: String
        },
        required: false
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
            required: true
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
        required: false // LIKE THIS, billingAddress IS NOT REQUIRED, BUT IF IT EXISTS, THEN STREET IS REQUIRED
        //TODO, TEST THAT
    },

    shippingAddress: {
        street: {
            type: String,
            required: true
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
        required: false
    },

    payTerms: {
        type: String,
        // TODO -> REF TO ANOTHER COLLECTION WITH TERMS
    }

    // TODO??? Account Number // Other settings: "Default Sales account / Default Discount / Credit Limit"
})

module.exports = customer
