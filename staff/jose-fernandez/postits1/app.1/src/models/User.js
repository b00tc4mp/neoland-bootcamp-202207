// PRUEBA

// const mongoose =require('mongoose')
const { Schema,model } = require('mongoose')
const bcrypt = require('bcrypt')

// const UserSchema= new mongoose.Schema({
const user = new Schema({
    name: {
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
    }
});

const User = mongoose.model('User', UserSchema)

module.exports = User;