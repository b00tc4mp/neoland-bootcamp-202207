const { runWithErrorHandling, createLogger } = require('../../utils')
const { users: { authenticateUser } } = require('../../logic')
const { sign } = require('jsonwebtoken')
const logger = createLogger(module)

module.exports = async (req, res) => {
    runWithErrorHandling (async () => {
        const { body: { email, password } } = req

        const userId = await authenticateUser(email, password)

        const token = sign({ sub: userId }, 'frase random para el token', { expiresIn: '1h' })

        res.json({ token })

    }, res, logger)
}