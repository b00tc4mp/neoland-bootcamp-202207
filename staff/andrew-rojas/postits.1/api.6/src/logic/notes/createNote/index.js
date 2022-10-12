const { User, Note } = require ("../../../models")
const { NotFoundError, SystemError} = require("../../../errors")
const { validateString } = require ("../../../validators")
const { verifyObjectIdString } = require("../../../utils")

/**
 * creates a note for user.
 * 
 * @param {string} userId the user id. 
 * @param {string} text  the note text.
 * 
 * @return {promise}
 * 
 * @throws {TypeError} if any of the arguments does not match the expected type
 * @throws {FormatError}  if any of the arguments does not match the expected format
 *
 * @throws {NotFoundError} if the user is not found
 * @throws { SystemError} if an error happens in db
 */

function createNote(userId, text = '') {
  verifyObjectIdString(userId, "user id")
  validateString(text, "text")

    return User.findById(userId).lean()
      .catch(error => {
        throw new SystemError(error.message)
      })
      .then(user => {
        if(!user) throw new NotFoundError(`user with id ${userId} not found`)

        return Note.create({ user: user._id, text })
          .catch(error => {
            throw new SystemError(error.message)
          })
      })
      .then(note => { })
}

module.exports = createNote
