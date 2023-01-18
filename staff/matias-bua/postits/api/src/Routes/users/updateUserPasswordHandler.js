const { runWithErrorHandling } = require('../../utils')
const logger = require('../../logger')(module)
const updateUserPassword = require('../../logic/updateUserPassword')
const { validateToken } = require('../../utils')
const { Blacklist } = require('../../models')

function updateUserPasswordHandler(req, res){
    runWithErrorHandling(async () => {
        const { userId, token } = await validateToken(req)
        
        const { body: { oldPassword, newPassword, confirmPassword } } = req

        await updateUserPassword(userId, oldPassword, newPassword, confirmPassword)
        // await Blacklist.create({token, expiresAt: new Date()})

        res.status(204).send()
        
        logger.info(`User: ${userId} updated his password succesfully`)
    }, res, logger)
}

module.exports = updateUserPasswordHandler