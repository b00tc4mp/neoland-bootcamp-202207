const { runWithErrorHandling } = require('../../utils')
const logger = require('../../logger')(module)
const updateUserEmail = require('../../logic/updateUserEmail')
const { validateToken } = require('../../utils')
const { Blacklist } = require('../../models')

function updateUserEmailHandler(req, res){
    
    runWithErrorHandling(async () => {
        const { userId, token } = await validateToken(req)
        
        const { body: { email } } = req

        await updateUserEmail(userId, email)
        await Blacklist.create({token, expiresAt: new Date()})
        res.status(204).send()

        logger.info(`User: ${userId} updated his email succesfully`)
    }, res, logger)
}

module.exports = updateUserEmailHandler