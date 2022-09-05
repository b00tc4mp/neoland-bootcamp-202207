const { User } = require('../../../models')
const { verifyObjectIdString } = require('../../../utils')
const { NotFoundError, SystemError } = require('../../../errors')


function retrieveUser(userId) {
  verifyObjectIdString(userId, 'user id')

  return User.findById(userId, 'name email').lean()
    .catch(error => {
      throw new SystemError(error.message)
    })
    .then(user => {
      if (!user) throw new NotFoundError(`user with userId ${userId} not found`)

      delete user._id
      
      return user
    })
}

module.exports = retrieveUser