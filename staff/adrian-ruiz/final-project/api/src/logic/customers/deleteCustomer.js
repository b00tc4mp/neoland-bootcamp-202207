const { User, Customer } = require('../../models')
const { NotFoundError, FormatError, ForbiddenError } = require('errors')
const { Types: { ObjectId }} = require('mongoose')


function deleteCustomer(userId, company, customerId){
    if (!(ObjectId.isValid(company))) throw new FormatError('Company ID is not valid')
    if (!(ObjectId.isValid(userId))) throw new FormatError('User ID is not valid')
    if (!(ObjectId.isValid(customerId))) throw new FormatError('User ID is not valid')


    return (async() => {
        
        const customer = await Customer.findOne({_id : customerId, company})
        if(!customer) throw new NotFoundError(`Customer with ID ${customerId} not found in Company with ID ${company}`)

        const user = await User.findById(userId)

        if(!user) throw new NotFoundError(`User with id ${userId} not found`)

        if(user.role === 'accountant') throw new ForbiddenError(`User ${userId} does not have permission to delete customers`)

        await customer.delete()
        
    })()
}

module.exports = deleteCustomer