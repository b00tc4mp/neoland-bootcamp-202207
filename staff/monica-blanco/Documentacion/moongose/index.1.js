const mongoose = require('mongoose')

const { Schema, model } = mongoose

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
})

const User = model('User', user)

mongoose.connect('mongodb://localhost:27017/postits')
    .then(() => User.deleteMany({}))
    .then(() => User.create({ name: 'Pepito Grillo', email: 'pepito@grillo.com', password: '123123123', hello: 'world' }))
    .then(user => console.log('user', user))
    .then(() => mongoose.disconnect())
    .then(() => console.log('disconnected'))