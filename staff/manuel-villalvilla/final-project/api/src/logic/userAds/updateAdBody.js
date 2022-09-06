const { SystemError, NotFoundError, CredentialsError } = require('errors')
const { Note, User } = require('../../models')
const { validateObjectId, validateNoteText } = require('validators')

/**
 * Update Note's text.
 * 
 * @param {ObjectId | String} userId User's id.
 * @param {ObjectId | String} noteId Note's id.
 * @param {String} text Note's new text.
 * 
 * @returns {Promise}
 * 
 * @throws {SystemError} If an error happens in db.
 * @throws {NotFoundError} If either user or note are not found.
 * @throws {CredentialsError} If note does not belong to user.
 * @throws {FormatError} If userId | noteId | text are not valid.
 * @throws {TypeError} If text is not a string.
 */

module.exports = function(userId, noteId, text) {
    validateObjectId(userId)
    validateObjectId(noteId)
    validateNoteText(text)

    return User.findById(userId).lean()
        .catch(error => {throw new SystemError(error)})
        .then(user => {
            if (!user) throw new NotFoundError('user not found')
            return Note.findById(noteId)
                .catch(error => {throw new SystemError(error)}) // preguntar si no pongo mucho catch
                .then(note => {
                    if (!note) throw new NotFoundError('note not found')
                    if (note.user.toString() !== user._id.toString()) throw new CredentialsError('this note does not belong to user')
                    note.text = text
                    note.modifiedAt = Date.now()
                    return note.save()
                })
                .then(() => {})
        })
}