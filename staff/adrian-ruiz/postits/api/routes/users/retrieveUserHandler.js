const { runWithErrorHandling } = require('../../utils')
const logger = require('../../logger')(module)
const retrieveUser = require('../../logic/retrieveUser')
const { validateToken } = require('../../utils')


function retrieveUserHandler(req, res) {
    runWithErrorHandling(() => {
        const { userId } = await validateToken(req)

        return (async () => {
        
            const user = await retrieveUser(userId)

            res.json({ name: user.name, email: user.email, notes: user.notes })

            logger.info(`User: ${user} retrieved succesfully`)
        })()
    }, res, logger)
}

module.exports = retrieveUserHandler