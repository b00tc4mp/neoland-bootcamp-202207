const { runWithErrorHandling } = require('../../utils')
const logger = require('../../logger')(module)
const authenticateUser = require('../../logic/authenticateUser')
const { sign } = require('jsonwebtoken')

function authenticateUserHandler(req, res){
    runWithErrorHandling(async () => {
        const { body: { email, password } } = req

        const userId = await authenticateUser(email, password)

        const token = sign({ sub: userId }, 'ImagineLosingTimeToHackThis', { expiresIn: '1h' })

        res.json({ token })

        logger.info(`User: ${userId} authenticated succesfully`)
    }, res, logger)
}

module.exports = authenticateUserHandler