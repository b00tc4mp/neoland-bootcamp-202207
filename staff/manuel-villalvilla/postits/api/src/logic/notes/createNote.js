const { SystemError, NotFoundError } = require("../../errors")
const { Note, User } = require("../../models")
const { validateObjectId } = require("../../validators")

/**
 * Creates an empty note for a user.
 * 
 * @param {string} userId The user id.
 *  
 * @returns {Promise}
 * 
 * @throws {SystemError} If an error happens in db.
 * @throws {NotFoundError} If the user is not found.
 * @throws {FormatError} If the user id is not valid
 */

module.exports = function(userId, text = '') { 
    validateObjectId(userId)

    return User.findById(userId).lean()
        .catch(error => {
            // si NO encuentra usuario NO TIRA ERROR, guarda un user vacio
            throw new SystemError(error.message) // es systemerror por si falla mongo
        })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')
            return Note.create({ user: user._id, text })
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(note => {}) // devuelvo objeto vacio para q no se devuelva la nota entera
}