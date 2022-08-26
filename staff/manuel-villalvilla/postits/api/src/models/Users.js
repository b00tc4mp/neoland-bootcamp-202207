const mongoose = require('mongoose')
const { Schema, model } = mongoose

module.exports = model('Users', new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // no se podran repetir los emails. Sirve como filtro
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}))



// const user = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// })

// const Users = model('Users', user)

// module.exports = Users