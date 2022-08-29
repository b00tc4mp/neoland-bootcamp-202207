const { Users } = require('../models')
const { validateObjectId } = require('../validators')

module.exports = async function (userId) {
    validateObjectId(userId)
    const user = await Users.findById(userId)

    return { name: user.name, email: user.email }
}