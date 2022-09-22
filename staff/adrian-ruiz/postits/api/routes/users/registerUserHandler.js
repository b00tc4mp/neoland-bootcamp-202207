const { runWithErrorHandling } = require('../../utils')
const logger = require('../../logger')(module)
const registerUser = require('../../logic/registerUser')
const { Blacklist } = require('../../models')

function registerUserHandler(req, res){
    runWithErrorHandling(async () => {
        const { body: { name, email, password } } = req

        await registerUser(name, email, password)

        res.status(201).send()
        logger.info(`User: ${email} registered succesfully`)
    }, res, logger)
}

module.exports = registerUserHandler