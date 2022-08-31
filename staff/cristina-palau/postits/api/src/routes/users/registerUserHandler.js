const { runWithErrorHandling, createLogger } = require('../../utils')
const { users: { registerUser } } = require('../../logic')
const logger = createLogger(module)

module.exports = async (req, res) => {
    runWithErrorHandling(async () => {
        const { body: { name, email, password } } = req

        await registerUser(name, email, password)

        res.status(201).send()

    }, res, logger)
} 