const { runWithErrorHandling, createLogger } = require("../../utils")
const { users: { authenticateUser } } = require("../../logic")
const { sign } = require("jsonwebtoken")
const logger = createLogger(module)
const { JTW_SECRET, JWT_EXP } = process.env

module.exports = (req,res) => {
  runWithErrorHandling(() => {
    const { body: { email, password } } = req

    return authenticateUser(email, password)
      .then(userId => {
        const token = sign({ sub: userId }, JTW_SECRET, { expiresIn: JWT_EXP })

        res.json({ token })
      })
  }, res, logger)
}