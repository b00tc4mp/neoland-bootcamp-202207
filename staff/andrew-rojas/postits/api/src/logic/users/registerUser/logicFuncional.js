const { User } = require("../../../models")
const { DuplicityError, SystemError } = require("errors")
const { validateText, validateEmail, validatePassword } = require("validators")

function registerUser(name, email, password) {
  validateText(name, "name")
  validateEmail(email)
  validatePassword(password)

  return User.create({ name, email, password })
    .then(user => {})
    .catch(error => {  
      if (error.code === 11000)
        throw new DuplicityError('user already exists')

        throw new SystemError(error.message)
    })
}

module.exports = registerUser



const { runWithErrorHandling, createLogger } = require("../../utils")
const { users: { registerUser } } = require("../../logic")
const logger = createLogger(module)

module.exports = (req, res) => {
  runWithErrorHandling(() => {
    const { body: { name, email, password } } = req

    return registerUser(name, email, password)
      .then(() => res.status(201).send())
    }, res, logger)
}