const {Schema} = require('mongoose')

const user = new Schema({
    name: String,
    // name:{
    //     type: String,
    //     // required: false
    // },
    email:{
        type: String,
        // required:true,
        unique:true
    },
    password:{
        type: String
        // required: true
    },
    role:{
        type: String,
        enum:['anonymous','client','admin'],
        // required:true,
        default:'anonymous'
    },
    cart:{
        ref:'Cart'
    }

})

module.exports = user