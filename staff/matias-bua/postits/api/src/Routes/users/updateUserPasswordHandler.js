// const { runWithErrorHandling, verifyToken, createLogger } = require('../../utils')
// const logger = createLogger(module)
// const { users: { updatePasswordUser } } = require('../../logic')
// const { Blacklist } = require('../../models')

// function updateUserPasswordHandler(req, res){
//     runWithErrorHandling(async () => {
//         debugger
//         const { userId , token } = await verifyToken(req)
        
//         const { body: { oldPassword, newPassword, newPasswordRepeat } } = req

//         await updatePasswordUser(userId, oldPassword, newPassword, newPasswordRepeat)
//         // await Blacklist.create({token, expiresAt: new Date()})

//         res.status(204).send()
        
//         logger.info(`User: ${userId} updated his password succesfully`)
//     }, res, logger)
// }

// module.exports = updateUserPasswordHandler



const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { users: { updatePasswordUser } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        debugger

        const userId = verifyToken(req)

        const { body: { oldPassword, newPassword, newPasswordRepeat} } = req

        return updatePasswordUser(userId, oldPassword, newPassword, newPasswordRepeat)
            .then(()=> res.status(204).send())
    }, res, logger)
}