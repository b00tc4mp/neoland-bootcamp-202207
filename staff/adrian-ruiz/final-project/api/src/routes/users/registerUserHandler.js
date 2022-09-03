const { runWithErrorHandling } = require('../../utils')
const { users: {registerUser} } = require('../../logic')

function registerUserHandler(req, res){
    runWithErrorHandling(async () => {
        const { body: { name, email, password, companyId, rol } } = req

        await registerUser(name, email, password, companyId, rol)

        res.status(201).send()
    
    }, res)
}

module.exports = registerUserHandler