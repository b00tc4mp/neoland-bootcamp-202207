const {User}= require ('../models')
const {NotFoundError, SystemError} = require ('../error')
const { validateObjectId } = require('../validators')

function retrieveUser(userId) {
    validateObjectId(userId, 'user id')

    
    return User.findById(userId, 'name email').lean()
    .catch(error => {
        throw new SystemError(error.message)
    })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            // sanitize
            delete user._id

            return user
        })
}

module.exports = retrieveUser

//====OTRAS FORMAS DE HACER TODO====
// return User.findById(userId)
//     .catch(error => {
//         throw new SystemError(error.message)
//     })
//     .then(user => {
//         if (!user) throw new NotFoundError(`user with id ${userId} not found`)

//         const { name, email } = user

//         return { name, email }
//     })
//====OTRA FORMA
// return User.findById(userId)
//     .catch(error => {
//         throw new SystemError(error.message)
//     })
//     .then(user => {
//         if (!user) throw new NotFoundError(`user with id ${userId} not found`)

//         const doc = user._doc
//         delete doc.password
//         delete user._id

//         return doc
//     })
//----Otra forma y aquí me da un objeto plano con .lean

// return User.findById(userId).lean()
//     .catch(error => {
//         throw new SystemError(error.message)
//     })
//     .then(user => {
//         if (!user) throw new NotFoundError(`user with id ${userId} not found`)

//         // sanitize
//         delete user.password
//         delete user.__v
//         delete user._id

//         return user
//     })

// return User.findById(userId).lean()
//     .catch(error => {
//         throw new SystemError(error.message)
//     })
//     .then(user => {
//         if (!user) throw new NotFoundError(`user with id ${userId} not found`)

//         // sanitize
//         delete user.password
//         delete user.__v
//         delete user._id

//         return user
//     })