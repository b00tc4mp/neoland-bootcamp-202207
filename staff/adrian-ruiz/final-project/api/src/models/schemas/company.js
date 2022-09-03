const { Schema } = require('mongoose')

const company = new Schema({
    name:{
        type: String,
    },

    legalName: {
        type: String
    },

    legalId: {
        type: String,
    },

    telephone: {
        type: Number
    },

    companyEmail : {
        type: String
    },

    customerFacingEmail: {
        type: String
    },

    postalAddress: {
        street : {
            type : String
        },
        town : {
            type : String
        },
        state : {
            type: String
        },
        zipCode: {
            type: Number
        },
        country : {
            type : String
        }
    },

    physicalAddress: {
        street : {
            type : String
        },
        town : {
            type : String
        },
        state : {
            type: String
        },
        zipCode: {
            type: Number
        },
        country : {
            type : String
        }
    },

    sector: {
        type: String,
    },

    website: {
        type: String
    }

})

module.exports = company