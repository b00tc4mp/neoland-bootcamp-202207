const { runWithErrorHandling, validateToken } = require('../../utils')
const { createPDF } = require('../../logic')
const fs = require('fs')
const logger = require('../../logger')(module)

function createPDFHandler(req, res){
    
    runWithErrorHandling(async () => {
        const { companyId, userId } = await validateToken(req)
        
        const invoiceId = req.params.invoiceId

        const file = await createPDF(userId, companyId, invoiceId)

        /* const tempFile ='3131_1663608751878.pdf' */

        res.download(file)

        /* fs.readFile(tempFile, (error, data) => {
            if(error) throw new Error('Error reading file')
            res.contentType("application/pdf")
            res.status(201).send(data)
        }) */
        
    
    }, res, logger)
}

module.exports = createPDFHandler