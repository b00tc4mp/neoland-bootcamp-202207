const { User, Company } = require('../../models')
const { DuplicityError, NotFoundError, FormatError } = require('errors')
const { validateEmail, validatePassword, validateRole } = require('validators')
const { Types: { ObjectId } } = require('mongoose')

function registerUser(name, email, password, companyId, role) {
    validateEmail(email)
    validatePassword(password)
    validateRole(role)
    if (!(ObjectId.isValid(companyId))) throw new FormatError('Company ID is not valid');

    return (async () => {
        
        const found = await User.findOne({ email })

        if (found) throw new DuplicityError(`Email ${email} is already on use`)

        const companyFound = await Company.findById(companyId)

        if (!companyFound) throw new NotFoundError(`Company with ID ${companyId} not found`)

        await User.create({ name, email, password, company: companyId, role })
    })()
}

module.exports = registerUser