const { runWithErrorHandling, validateToken } = require('../../utils')
const { inventory: {createInventoryItem} } = require('../../logic')
const logger = require('../../logger')(module)

function createInventoryItemHandler(req, res){
    //TODO VALIDATE TOKEN
    runWithErrorHandling(async () => {
        const { companyId } = await validateToken(req)

        const { body: { name, sku, category, cost, averageCost, description, minStock, stock} } = req

        await createInventoryItem(companyId, { name, sku, category, cost, averageCost, description, minStock, stock})

        res.status(204).send()
    
    }, res, logger)
}

module.exports = createInventoryItemHandler