const mongoose = require('mongoose')

const { Schema, model, Types: { ObjectId } } = mongoose

const card = new Schema({
    name: {
        type: String,
        required: true
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
        default: ''
    }
})

const Note = model('Note', note);

(async () => {
    await mongoose.connect('mongodb://localhost:27017/postits')

    // await User.deleteMany()
    // await Note.deleteMany()

    await Promise.all([User.deleteMany({}), Note.deleteMany({})])

    const user = await User.create({ name: 'Pepito Grillo', email: 'pepito@grillo.com', password: '123123123', hello: 'world' })

    console.log('user', user)

    const note = await Note.create({ user: user.id, text: 'hola mundo' })

    console.log('note', note)

    const notePopulated = await Note.findById(note.id).populate('user')

    const userFounded = await User.findById(notePopulated.user._id)

    const card1 = new Card({ name: 'Pepito Grillo', number: '0012 3400 5600 7800', expirity: new Date, cvv: '001' })
    const card2 = new Card({ name: 'Pepito Grillo', number: '0098 7600 6500 2100', expirity: new Date, cvv: '002' })

    userFounded.cards.push(card1, card2)

    const userWithCards = await userFounded.save()

    console.log('user', userWithCards)
    
    await mongoose.disconnect()
    
    console.log('disconnected')
})()