const { Users } = require('../models')
const { DuplicityError } = require('../errors')

module.exports = function (name, email, password) {

    return Users.create({ name, email, password }) // mongo comprueba si email ya existe pq lo tiene indexado
        .then(() => {})
        .catch(error => {
            if (error.code === 11000) // el codigo de error de mongo para usuario existente
                throw new DuplicityError(`user with email ${email} already exists`)

            throw error
        })
}
