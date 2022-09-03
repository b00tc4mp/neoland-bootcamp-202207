const mongoose = require('mongoose')

const { Schema, model, Types: { ObjectId } } = mongoose

const card = new Schema({
    name: {
        type: String,
        require: true
    },
    number: {
        type: String,
        required: true
    },
    expirity: {
        type: Date,
        required: true
    },
    cvv: {
        type: String,
        required: true
    }
})

const Card = model('Card', card)

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
    },
    cards: [card] // embedding
})

const User = model('User', user)

const note = new Schema({
    user: { // linking
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        default: '' // solo lo coloco si quiero que mi nuevo texto sea vacio
    }
})

const Note = model('Note', note)

mongoose.connect('mongodb://127.0.0.1:27017/postits')
    //.then(()=>User.deleteMany({}))
    //.then(()=>Note.deleteMany({}))
    .then(() => Promise.all([User.deleteMany({}), Note.deleteMany({})]))
    .then(() => User.create({ name: 'Pepito Grillo' ,  email: 'pepito@grillo.com' ,  password: '123123123' }))
    .then(user => {
        console.log('user', user)

        return Note.create({ user: user.id, text: 'hola mundo' })
    })
    .then(noteId => Note.findById(noteId).populate('user'))
    .then(note=>{
        console.log('note',note)

        return note.user._id
    })
    .then(userId => User.findById(userId))
    .then(user =>{
        const card1= new Card({name:'Pepito Grillo',number:'0012324323433243',expirity: new Date,cvv:'012'})
        const card2= new Card({name:'Pepite Grillo',number:'0012324323433256',expirity: new Date,cvv:'212'})

        user.cards.push(card1,card2)

        return user.save()
    })
    .then(user => console.log('user',user))
    .then(()=> mongoose.disconnect())
    .then(()=>console.log('disconnect'))