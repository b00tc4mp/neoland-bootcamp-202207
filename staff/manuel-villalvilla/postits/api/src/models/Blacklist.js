const { model, Schema } = require("mongoose");

module.exports = model('Blacklist', new Schema({
    token: {
        type: String,
        required: true
    },
    expiresAt: {
        type: Date,
        expires: 3700, // le pongo q caduque algo mas tarde q el token para q caduqe primero el token
        required: true 
    }
}))