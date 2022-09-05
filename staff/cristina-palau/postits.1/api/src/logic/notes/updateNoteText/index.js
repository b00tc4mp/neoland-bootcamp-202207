const { NotFoundError, AuthError, SystemError } = require("../../../errors")
const { User, Note } = require("../../../models")
const { verifyObjectIdString } = require("../../../utils")
const { validateString } = require("../../../validators")

/**
 * Update the note text
 * 
 * @param {string} userId The user id.
 * @param {string} noteId The note id.
 * @param {string} text The note text.
 * 
 * @throws {NotFoundError} If any of the ids does not match with the expected ids.
 * @throws {AuthError} If the note does not belong to the user.
 * 
 * @throws {NotFoundError} If the user is not found.
 * 
 * @returns 
 */
module.exports = function updateNoteText(userId, noteId, text) {
    verifyObjectIdString(userId)
    verifyObjectIdString(noteId)
    validateString(text)

    return User.findById(userId)
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            return Note.findById(noteId)
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })

        .then(note => {
            if (!note) throw new NotFoundError(`note with id ${noteId} not found`)

            if (note.user.toString() !== userId) throw new AuthError(`note with id ${noteId} does not belong to user with id ${userId}`)

            note.text = text
            note.modifiedAt = Date.now()

            return note.save()
        })
        .then(() => { })
}