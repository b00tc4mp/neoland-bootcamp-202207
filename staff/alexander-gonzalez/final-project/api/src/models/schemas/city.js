const place = require('./place')
const { Schema } = require ('mongoose') 

const city = new Schema({
   name: {
       type: String,
       required: true 
    },

    photo:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    places: [place]
})

module.exports = city