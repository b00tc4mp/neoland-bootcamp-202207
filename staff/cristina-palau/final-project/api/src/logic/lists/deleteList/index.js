const { NotFoundError, AuthError, SystemError } = require("errors")
const { User, List } = require("../../../models")
const { verifyObjectIdString } = require("../../../utils")

module.exports = function deleteList(userId, listId) {
    verifyObjectIdString(userId)
    verifyObjectIdString(listId)
   
    return User.findById(userId)
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            return List.findById(listId)
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })

        .then(list => {
            if (!list) throw new NotFoundError(`list with id ${listId} not found`)

            if (list.creator.toString() !== userId) throw new AuthError(`list with id ${listId} does not belong to user with id ${userId}`)

            return List.deleteOne({ _id: listId })
        })

        .then(() => { })
}