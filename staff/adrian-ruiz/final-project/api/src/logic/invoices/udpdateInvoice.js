const { Invoice } = require('../../models')
const { NotFoundError, FormatError } = require('errors')
const { Types: { ObjectId } } = require('mongoose')

function updateInvoice( invoiceId, companyId, {invoiceNumber, customer, terms, invoiceDate, dueDate, products, balance, totalAmount, status}){
    //TODO VALIDATE INPUTS
    if (!(ObjectId.isValid(companyId))) throw new FormatError('Company ID is not valid')
    if (!(ObjectId.isValid(invoiceId))) throw new FormatError('Customer ID is not valid')

    return (async () => {
        
        const invoice = Invoice.findOne({_id : invoiceId, company: companyId}).lean()
        if(!invoice) throw new NotFoundError(`invoice with ID ${invoiceId} not found or not belong to company with ID ${companyId}`)

        await invoice.updateOne({_id: invoiceId}, {invoiceNumber, customer, terms, invoiceDate, dueDate, products, balance, totalAmount, status})
    })()
}

module.exports = updateInvoice