const { SystemError, AuthError } = require("../errors")
const { Note, User } = require("../models")
const { validateObjectId } = require("../validators")

function retrieveNote (userId) {
    validateObjectId(userId)
    
    return User.findById(userId).lean()
        .catch(error => {throw new SystemError(error)})
        .then(user => {
            if (!user) throw new AuthError ('user not found')
            return Note.find({ user: userId }).lean()
                .catch(error => {throw new SystemError(error)})
                .then(notes => notes)
        })
}
module.exports = retrieveNote