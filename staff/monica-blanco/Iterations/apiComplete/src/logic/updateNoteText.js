const { User, Note } = require('../models')
const { NotFoundError, AuthError } = require('../errors')
const {validateString, validateObjectId} = require ('../validators')

module.exports = function updateNoteText(userId, noteId, text) {
    validateObjectId(userId)
    validateObjectId(noteId)
    validateString(text)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Note.findById(noteId)
        })
        .then(note => {
            if (!note) throw new NotFoundError(`note with id ${noteId} not found`)

            if(note.user.toString() !== userId) throw new AuthError(`note with id ${note.id} does not belong to user with id`)

            note.text = text
            note.modifiedAt = Date.now()

            return note.save()
        })
        .then(() => {})
}