const { User, Company } = require('../../models')
const { DuplicityError, NotFoundError } = require('errors')

function registerUser(name, email, password, companyId, rol) {
    //TODO INPUT VALIDATIONS

    return (async () => {
        debugger
        const found = await User.findOne({ 'email': email })

        if (found) throw new DuplicityError(`User with email ${email} already exists`)

        const companyFound = await Company.findById(companyId)

        if(!companyFound) throw new NotFoundError(`Company with ID ${companyId} not found`)
        
        await User.create({ name, email, password, company: companyId, rol })
    })()
}

module.exports = registerUser