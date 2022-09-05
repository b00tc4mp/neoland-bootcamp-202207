const { runWithErrorHandling } = require('../../utils')
const { company: {registerCompany} } = require('../../logic')
const logger = require('../../logger')(module)

function registerCompanyHandler(req, res){
    runWithErrorHandling(async () => {
        const { body: { name, email, password} } = req

        await registerCompany(name, email, password)

        res.status(201).send()
    
    }, res, logger)
}

module.exports = registerCompanyHandler