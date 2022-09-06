const { User } = require('../../models')
const { DuplicityError, SystemError } = require('errors')
const { validateText, validateEmail, validatePassword } = require('validators')

/**
 * Register a new user.
 * 
 * @param {string} name The user's name.
 * @param {string} email The user's email.
 * @param {string} password The user's password.
 *  
 * @returns {Promise}
 * 
 * @throws {SystemError} If an error happens in db.
 * @throws {DuplicityError} If the user's email already exists in db.
 * @throws {FormatError} If name | email | password are not valid.
 * @throws {TypeError} If name | email | password are not a string.
 */

module.exports = function (name, email, password) {
    /* como no exporto la funcion como async, si estos primeros validadores tiran error,
    lo captura el try catch de fuera por ser sincronos. Si exporto la funcion como async,
    los posibles errores me los capturaria el catch de la promesa de fuera */
    validateText(name, 'name')
    validateEmail(email)
    validatePassword(password)

    return User.create({ name, email, password }) // mongo comprueba si email ya existe pq lo tiene indexado
        .then(() => {})
        .catch(error => {
            if (error.code === 11000) // el codigo de error de mongo para usuario existente
                throw new DuplicityError(`user with email ${email} already exists`)

            throw new SystemError(error.message)
        })
}
