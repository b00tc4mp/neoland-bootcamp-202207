const { User } = require("../../../models")
const { DuplicityError, SystemError, AuthError } = require("errors")
const { validateText, validateEmail, validatePassword } = require("validators")

function registerUser(adminEmail, adminPassword, name, email, password, role = 'employee') {
  validateText(name, "name")
  validateEmail(email, "email")
  validatePassword(password, "password")
  //TODO validate role
  
  return User.findOne({email: adminEmail, password: adminPassword, role : 'admin'})
    .then(user => {
      if(!user) throw new AuthError(`Admin authentification wrong`)

      return User.create({ name, email, password, role })
      .then(user => {})
    })
    .catch(error => {  
      if (error.code === 11000)
        throw new DuplicityError('user already exists')
      else if(error instanceof AuthError){
        throw new AuthError(error.message)
      }

        throw new SystemError(error.message)
    })
}

module.exports = registerUser




const { runWithErrorHandling, createLogger } = require("../../utils")
const { users: { registerUser } } = require("../../logic")
const logger = createLogger(module)

module.exports = (req, res) => {
  runWithErrorHandling(() => {
    const { body: { adminEmail, adminPassword, name, email, password } } = req

    return registerUser(adminEmail, adminPassword, name, email, password)
      .then(() => res.status(201).send())
    }, res, logger)
}