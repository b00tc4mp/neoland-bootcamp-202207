const { authenticateUser } = require('../../logic')
const jwt = require('jsonwebtoken')
const { logger, errorHandler } = require('../../utils')
const { NotFoundError } = require('errors')

module.exports = (req, res) => {
    try {
        const { body: { email, password } } = req

        authenticateUser(email, password)
            .then(userId => {
                const token = jwt.sign({ sub: userId }, 'ilovethisshit', { expiresIn: '1h' })
                res.json({ token })
                logger.info(`user ${email} authenticated`)
            })
            .catch(error => {
                logger.error(error)
                if (error instanceof NotFoundError) error.message = 'unverified user'
                errorHandler(error, res)
                return
            })
    } catch (error) {
        logger.error(error)
        errorHandler(error, res)
    }
}