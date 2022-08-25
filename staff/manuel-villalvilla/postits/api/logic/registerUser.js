const { validateCallback } = require('../validators')
const { DuplicityError } = require('../errors')
const { Users } = require('../models')

module.exports = async function (name, email, password, callback) {
    validateCallback(callback)

    const user = await Users.findOne({ email }) // el await funciona como un throw si la promesa es rechazada

    if (user) return callback(new DuplicityError(`user with ${email} already exists`))

    await Users.create({ name, email, password })

    callback(null)
}
