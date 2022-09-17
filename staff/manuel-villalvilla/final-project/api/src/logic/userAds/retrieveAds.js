const { SystemError, NotFoundError } = require("errors")
const { Ad, User } = require("../../models")
const { validateObjectId } = require("validators")

/**
 * Retrieves user's notes.
 * 
 * @param {string} userId The user id.
 *  
 * @returns {Promise}
 * 
 * @throws {SystemError} If an error happens in db.
 * @throws {NotFoundError} If the user is not found.
 * @throws {FormatError} If the user id is not valid
 */

module.exports = function (userId) {
    validateObjectId(userId)
    
    return User.findById(userId).lean()
        .catch(error => {throw new SystemError(error)})
        .then(user => {
            if (!user) throw new NotFoundError('user not found')
            return Ad.find({ user: userId }, 'text visibility createdAt modifiedAt').lean()
                .catch(error => {throw new SystemError(error)})
                .then(notes => {
                    notes.forEach(note => {
                        // sanitize
                        note.id = note._id.toString()
                        delete note._id
                        delete note.__v
                    })
                    return notes
                })
        })
}