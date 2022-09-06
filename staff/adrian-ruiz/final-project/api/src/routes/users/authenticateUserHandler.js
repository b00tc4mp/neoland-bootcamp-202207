const { runWithErrorHandling } = require('../../utils')
const { users: {authenticateUser} } = require('../../logic')
const logger = require('../../logger')(module)
const { sign } = require('jsonwebtoken')

function authenticateUserHandler(req, res){
    runWithErrorHandling(async () => {

        const { body: { email, password } } = req

        const {userId, companyId} = await authenticateUser(email, password)

        const token = sign({ sub: {userId, companyId} }, 'ImagineLosingTimeToHackThis', { expiresIn: '1h' })

        res.json({ token })

        logger.info(`User: ${userId} authenticated succesfully`)
    }, res, logger)
}

module.exports = authenticateUserHandler