const { runWithErrorHandling, createLogger } = require("../../utils")
const { users: {authenticateUser } } = require("../../logic")
const { sign } = require("jsonwebtoken")
const { NotFoundError, AuthError } = require("../../errors")
const logger = createLogger(module)

module.exports = (req,res) => {
  runWithErrorHandling(() => {
    const { body: { email, password } } = req

    authenticateUser(email, password)
    .then(userId => {
      const token = sign({ sub: userId }, 'Dan: copie el codigo de monica!', { expiresIn: '1h' })

      res.json({ token })
    })
    .catch(error => {
      if (error instanceof NotFoundError || error instanceof AuthError)
        res.status(401).json({ error: 'wrong credencials' })
      else 
        res.status(500).json({ error: 'system error' })

        logger.error(error)

        return
    })
  }, res, logger)
}