const { User } = require('../../../models')
const { validateEmail, validatePassword } = require('../../../validators')
const { AuthError, NotFoundError, FormatError } = require('../../../errors')


async function retrieveUser(email, userId) {
  
  validateEmail(email)

  const user = await User.findOne({ _id: `${userId}` })

  if (!user) throw new NotFoundError(`user with userId ${userId} not found`)

  const userUpdated = await User.updateOne({_id: `${userId}`})
  let user2 = { name: user.name, email: user.email }
  
  return user2
}

module.exports = retrieveUser