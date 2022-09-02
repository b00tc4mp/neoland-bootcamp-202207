const { SystemError, NotFoundError, CredentialsError, FormatError } = require('../../errors')
const { Note, User } = require('../../models')
const { validateObjectId, validateText } = require('../../validators')

/**
 * Update Note's visibility.
 * 
 * @param {ObjectId | String} userId User's id.
 * @param {ObjectId | String} noteId Note's id.
 * @param {Boolean} visibility Note's visibility in Boolean.
 * 
 * @returns {Promise}
 * 
 * @throws {SystemError} If an error happens in db.
 * @throws {NotFoundError} If either user or note are not found.
 * @throws {CredentialsError} If note does not belong to user.
 * @throws {FormatError} If userId | noteId are not valid.
 * @throws {TypeError} If visibility is not a Boolean.
 */

module.exports = function(userId, noteId, visibility) {
    validateObjectId(userId)
    validateObjectId(noteId)
    validateText(visibility, 'visibility')
    if (visibility !== 'public' && visibility !== 'private') throw new FormatError('visibility not valid')

    return User.findById(userId).lean()
        .catch(error => {throw new SystemError(error)})
        .then(user => {
            if (!user) throw new NotFoundError('user not found')
            return Note.findById(noteId)
                .catch(error => {throw new SystemError(error)}) // preguntar si no pongo mucho catch
                .then(note => {
                    if (!note) throw new NotFoundError('note not found')
                    if (note.user.toString() !== user._id.toString()) throw new CredentialsError('this note does not belong to user')
                    visibility === 'public' ? note.visibility = 'public' : visibility === 'private' ? note.visibility = 'private' : null
                    note.modifiedAt = Date.now()
                    return note.save()
                })
                .then(() => {})
        })
}