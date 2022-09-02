const { NotFoundError, CredentialsError } = require("../../errors")
const { User, Note } = require("../../models")
const { validateObjectId } = require("../../validators")

/**
 * Deletes a user's note.
 * 
 * @param {ObjectId | String} userId User's id.
 * @param {ObjectId | String} noteId Note's id.
 * @throws {NotFoundError} Either user or note are not found.
 * @throws {CredentialsError} The note does not belong to user.
 * @throws {FormatError} Either userId or noteId are not valid.
 * @returns {Promise}
 */

module.exports = function (userId, noteId) {
    validateObjectId(userId)
    validateObjectId(noteId)

    return User.findById(userId).lean()
        .then(user => {
            if(!user) throw new NotFoundError('user not found')
            return Note.findById(noteId).lean()
                .then(note => {
                    if(!note) throw new NotFoundError('note not found')
                    if (note.user.toString() !== user._id.toString()) throw new CredentialsError('this note does not belong to user')
                    return Note.deleteOne({ _id: note._id })
                })
                .then(note => {})
        })
}