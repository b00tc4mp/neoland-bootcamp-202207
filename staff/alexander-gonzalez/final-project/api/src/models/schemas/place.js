
const { Schema, Types: {ObjectId} } = require ('mongoose')

const place = new Schema({
   name: {
       type: String,
       required: true 
    },

    description:{
        type: String,
        required: true
    },

    photo:{
        type:String,
        required:true

    },

    url:{
        type:String,
        required:true
    },


    favorites:{
        type:[ObjectId],
        ref: 'User'
    },

    coords:{
        type: [Number],
        required:true
    }

})

module.exports = place

