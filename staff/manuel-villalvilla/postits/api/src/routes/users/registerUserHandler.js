const { registerUser } = require('../../logic')
const { logger, errorHandler } = require('../../utils')

module.exports = (req, res) => {
    try {
        const { body: { name, email, password } } = req

        registerUser(name, email, password)
            .then(() => {
                res.status(201).send()
                logger.info(`user ${email} registered`)
            })
            .catch(error => {
                errorHandler(error, res)
                return
            })
    } catch (error) {
        errorHandler(error, res)
    }
}