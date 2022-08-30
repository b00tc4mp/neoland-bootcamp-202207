const { SystemError, NotFoundError } = require("../errors")
const { Note, User } = require("../models")
const { validateObjectId } = require("../validators")

module.exports = function(userId) { 
    validateObjectId(userId)

    return User.findById(userId).lean()
        .catch(error => {
            // si NO encuentra usuario NO TIRA ERROR, guarda un user vacio
            throw new SystemError(error.message) // es systemerror por si falla mongo
        })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')
            return Note.create({ user: user._id })
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(note => {}) // devuelvo objeto vacio para q no se devuelva la nota entera
}