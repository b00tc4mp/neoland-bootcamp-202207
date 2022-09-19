const { printRows, writeProductsOnCells, writeTitlesOnHeaders, writeInvoiceResume } = require('./helpers')
const PDFDocument = require('pdfkit')
const fs = require('fs')

const company = {
    name: 'Testing company name',
    companyEmail: '123123@123123.com',
    postalAddress: {
        street: 'Company Postal Street',
        town: 'Postal Town',
        state: 'State',
        zipCode: '12580',
        country: 'Spain'
    },
    telephone: 666555444

}
const invoiceNumber = '0011'
const invoiceDate = '23/01/2022'
const dueDate = '23/02/2022'
const terms = '30days'
const customer = {

    name: 'Testing customer template',
    billingAddress: {
        street: 'Testing street',
        town: 'Testing Town',
        state: 'Testing state',
        zipCode: '123123',
        country: 'Spain'
    },
    shippingAddress: {
        name: 'Shipping Name',
        shippingStreet: 'Shipping street',
        shippingTown: 'Shipping Town',
        shippingState: 'Shipping state',
        shippingZipCode: '12580',
        shippingCountry: 'Spain',
    }
}

const products = [
    { name: 'Product Name 1', description: 'Product desc 1', amount: 150, price: 20, tax: 21, total: 3333 },
    { name: 'Product Name 2', description: 'Product desc 2', amount: 150, price: 20, tax: 21, total: 3333 },
    { name: 'Product Name 3', description: 'Product desc 3', amount: 150, price: 20, tax: 21, total: 3333 },
    { name: 'Product Name 3', description: 'Product desc 3', amount: 150, price: 20, tax: 21, total: 3333 },
    { name: 'Product Name 3', description: 'Product desc 3', amount: 150, price: 20, tax: 21, total: 3333 },
    { name: 'Product Name 3', description: 'Product desc 3', amount: 150, price: 20, tax: 21, total: 3333 },
    { name: 'Product Name 3', description: 'Product desc 3', amount: 150, price: 20, tax: 21, total: 3333 },
    { name: 'Product Name 3', description: 'Product desc 3', amount: 150, price: 20, tax: 21, total: 3333 },
    { name: 'Product Name 3', description: 'Product desc 3', amount: 150, price: 20, tax: 21, total: 3333 },
    { name: 'Product Name 3', description: 'Product desc 3', amount: 150, price: 20, tax: 21, total: 3333 },
    { name: 'Product Name 3', description: 'Product desc 3', amount: 150, price: 20, tax: 21, total: 3333 },
    
]

const invoice = {company, invoiceNumber, invoiceDate, dueDate, terms, customer, products }
function createPDF(invoice){
    
    const {company, customer, invoiceNumber, invoiceDate, dueDate, terms, products} = invoice
    const positionsX = [30, 180, 330, 380, 430, 480]

    let pdfDoc = new PDFDocument({ size: 'A4' });
    pdfDoc.pipe(fs.createWriteStream(`${invoiceNumber}_${Date.now()}.pdf`));
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
        .text(`${company.postalAddress.street}\n${company.postalAddress.town}\n${company.postalAddress.state}\n${company.postalAddress.zipCode}\n${company.postalAddress.country}\n${company.companyEmail}\n${company.telephone}`)
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
}

module.exports = createPDF
createPDF(invoice)



