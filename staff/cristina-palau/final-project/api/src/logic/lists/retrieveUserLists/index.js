const { User, List } = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
const { verifyObjectIdString } = require('../../../utils')

function retrieveUserLists(userId) {
    verifyObjectIdString(userId, 'user id')

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return List.find({ creator: userId }, 'title createAt modifiedAt').lean()
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(lists => {
            lists.forEach(list => {

                list.id = list._id.toString()
                delete list._id
                delete list.__v
            })
            return lists
        })
}

module.exports = retrieveUserLists