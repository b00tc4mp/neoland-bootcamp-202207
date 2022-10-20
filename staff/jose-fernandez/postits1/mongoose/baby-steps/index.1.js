const mongoose = require('mongoose')

const { Schema,model,Types:{ObjectId} } = mongoose
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

const note = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'

    },
    text: {
        type: String,
        default: '' //si no pongo texto me lo coloca vacio
    }
})

const Note = model('Note', note)

mongoose.connect('mongodb://localhost:27017/postits')
    .then(() => User.deleteMany({}))
    .then(() => User.create({ name: 'Carolina', email: 'caro@lina.com', password: '123123123' }))
    .then(user => {
        console.log('user', user)
        return Note.create({user:user.id,text:'hola mundo'})
    })
    .then(note=>{
        console.log('note',note)

        return note.id
    })
    .then(noteId => Note.findById(noteId).populate('user'))
    .then(note => console.log('note',note))

    .then(() => mongoose.disconnect())
    .then(() => console.log('disconnect'))
