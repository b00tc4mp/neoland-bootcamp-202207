const { SystemError, CredentialsError } = require("../errors")
const { Note, User } = require("../models")
const { validateObjectId } = require("../validators")

module.exports = function (userId) {
    validateObjectId(userId)
    
    return User.findById(userId).lean()
        .catch(error => {throw new SystemError(error)})
        .then(user => {
            if (!user) throw new CredentialsError('user not found')
            return Note.find({ user: userId }).lean()
                .catch(error => {throw new SystemError(error)})
                .then(notes => notes)
        })
}