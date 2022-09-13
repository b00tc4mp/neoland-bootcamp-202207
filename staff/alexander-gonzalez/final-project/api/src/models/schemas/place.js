
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


    likes:{
        type:[ObjectId],
        ref: 'Place'
    },

    coords:{
        type: [Number],
        required:true
    }

})

module.exports = place

