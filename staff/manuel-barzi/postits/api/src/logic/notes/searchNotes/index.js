const { User, Note } = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
const { verifyObjectIdString } = require('../../../utils')
const { validateString } = require('validators')

function searchNotes(userId, query) {
    verifyObjectIdString(userId, 'user id')
    validateString(query)

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Note.find({ user: userId, text: { $regex: new RegExp(query) } }, 'text visibility createdAt modifiedAt').lean()
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(notes => {
            notes.forEach(note => {
                // sanitize
                debugger

                note.id = note._id.toString()
                delete note._id

                delete note.__v
            })

            return notes
        })
}

module.exports = searchNotes