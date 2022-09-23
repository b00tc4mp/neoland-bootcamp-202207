const { runWithErrorHandling, createLogger } = require('../../utils')
const { users: { authenticateUser } } = require('../../logic')
const { sign } = require('jsonwebtoken')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling (async () => {
        const { body: { email, password } } = req

        const userId = await authenticateUser(email, password)

        const token = sign({ sub: userId }, JWT_SECRET, { expiresIn: JWT_EXP })

        res.json({ token })

    }, res, logger)
}