const { User, Note } = require('../../../models')
const { NotFoundError } = require('../../../errors')
const { verifyObjectId } = require('../../../utils')
const { validateString } = require('../../../validators')

async function createNote(userId, text = '') {
    verifyObjectId(userId, 'user id')
    validateString(text, 'text')

    const user = await User.findById(userId).lean()

    if (!user) throw new NotFoundError(`user with id ${userId} not found`)
    
    await Note.create({ user: user._id, text })

    return
}

module.exports = createNote