const { User } = require('../../../models')
const { verifyObjectId } = require('../../../utils')
const { NotFoundError } = require('../../../errors')


async function retrieveUser(userId) {
  verifyObjectId(userId, 'user id')

  const user = await User.findById(userId, 'name email').lean()

  if (!user) throw new NotFoundError(`user with userId ${userId} not found`)

  else {
    delete user._id

    return user
  }
}

module.exports = retrieveUser