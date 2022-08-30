const mongoose = require('mongoose')
const { Schema, model, Types: { ObjectId } } = mongoose

module.exports = model('User', new Schema({
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

// const User = model('User', user)

// module.exports = User