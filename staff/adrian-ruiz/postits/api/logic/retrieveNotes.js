const { NotFoundError, FormatError } = require('errors')
const { User, Note } = require('../models')
const {Types: {ObjectId}} = require('mongoose')

function retrieveNotes(userId){
    if(!(ObjectId.isValid(userId))) throw new FormatError('User is not valid');
    
    return (async() => {

        const user = await User.findById(userId)

        if(!user) throw new NotFoundError(`User with ID: ${userId} not found`)

        const notes = await Note.find({user: userId}).lean()

        notes.forEach(note => {
            
            note.id = note._id.toString()
            delete note._id
            delete note.__v

            return note
        })
        return notes
    })()
}

module.exports = retrieveNotes