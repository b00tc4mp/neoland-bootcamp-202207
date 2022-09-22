const { Schema, Types : {ObjectId} } = require('mongoose')
const note = require('./note')

const user = new Schema({
    name:{
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    notes: [note]
})



module.exports = user