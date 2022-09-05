const { User, Company } = require('../../models')
const { DuplicityError, NotFoundError, FormatError } = require('errors')
const { validateEmail, validatePassword, validateRole } = require('validators')

function registerCompany(name, email, password) {
    //TODO validate name
    validateEmail(email)
    validatePassword(password)
   

    return (async () => {
        debugger
        const found = await User.findOne({ email })
        const foundCompany = await Company.findOne({ companyEmail: email })

        if (found || foundCompany) throw new DuplicityError(`Email ${email} is already on use`)

        const newCompany = await Company.create({name: `${name}'s Company`, companyEmail: email })
        const newUser = await User.create({ name, email, password, company: newCompany.id, role : 'admin' })
        newCompany.admin = newUser.id
        newCompany.save()
    })()
}

module.exports = registerCompany