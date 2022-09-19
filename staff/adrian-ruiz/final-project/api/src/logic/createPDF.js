const { printRows, writeProductsOnCells, writeTitlesOnHeaders, writeInvoiceResume } = require('./helpers')
const PDFDocument = require('pdfkit')
const fs = require('fs')
const { User, Invoice, Company } = require('../models')
const { NotFoundError, FormatError } = require('errors')

function createPDF(userId, companyId, invoiceId) {
    //TODO INPUT VALIDATIONS

    return (async () => {

        const user = await User.findById(userId).lean()
        if (!user) throw new NotFoundError('User not found')

        const company = await Company.findById(companyId).lean()
        if (!company) throw new NotFoundError('Company not found')

        const invoice = await Invoice.findById(invoiceId).lean()
        const { customer, invoiceNumber, invoiceDate, dueDate, terms, products } = invoice
        const positionsX = [30, 180, 330, 380, 430, 480]

        let pdfDoc = new PDFDocument({ size: 'A4' });
        const pdfFileName = `${invoiceNumber}_${Date.now()}.pdf`
        pdfDoc.pipe(fs.createWriteStream(`${pdfFileName}`));
        pdfDoc.fontSize(32)
            .fillColor('#42538D')
            .font('Helvetica-Bold')
            .text(`INVOICE N# ${invoiceNumber}`, { align: 'right', lineBreak: 'false' })
            .moveDown(1)
        pdfDoc.fontSize(16)
            .text(`${company.name.toUpperCase()}`, 70, 140);
        pdfDoc.fontSize(12)
            .fillColor('black')
            .font('Helvetica')
            .text(company.postalAddress ? `${company.postalAddress.street}\n${company.postalAddress.town}\n${company.postalAddress.state}\n${company.postalAddress.zipCode}\n${company.postalAddress.country}\n${company.companyEmail}\n${company.telephone}` : '')
        pdfDoc.text(`Invoice date:  ${invoiceDate}\nDue date:  ${dueDate}\nTerms:  ${terms}`, 380, 140)
            .moveDown(1)
        pdfDoc.fillColor('#42538D')
            .font('Helvetica-Bold')
            .text('BILL TO:', 70, 280)
        pdfDoc.text(`${customer.name}`)
        pdfDoc.fillColor('black')
            .font('Helvetica')
            .text(`${customer.billingAddress.street}\n${customer.billingAddress.town}\n${customer.billingAddress.state}\n${customer.billingAddress.zipCode}\n${customer.billingAddress.country}`, { width: 300 })
        pdfDoc.fillColor('#42538D')
            .font('Helvetica-Bold')
            .text(`SHIP TO:\n${customer.shippingAddress.name}`, 420, 280)
        pdfDoc.fillColor('black')
            .font('Helvetica')
            .text(`${customer.shippingAddress.shippingStreet}\n${customer.shippingAddress.shippingTown}\n${customer.shippingAddress.shippingState}\n${customer.shippingAddress.shippingZipCode}\n${customer.shippingAddress.shippingCountry}`)

        printRows(pdfDoc, products, 400, [180, 330, 380, 430, 480])
        writeTitlesOnHeaders(pdfDoc, ['Product Name', 'Product Description', 'QTY', 'Price', 'TAX', 'Total'], positionsX, 405)
        writeProductsOnCells(pdfDoc, products, positionsX, 425)
        writeInvoiceResume(pdfDoc, products, 430, 400)

        pdfDoc.end();

        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        await delay(1000);
        
        return pdfFileName
    })()


}

module.exports = createPDF

