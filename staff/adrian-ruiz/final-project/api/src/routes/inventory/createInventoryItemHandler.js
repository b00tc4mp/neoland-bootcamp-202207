const { runWithErrorHandling } = require('../../utils')
const { inventory: {createInventoryItem} } = require('../../logic')
const logger = require('../../logger')(module)

function createInventoryItemHandler(req, res){
    //TODO VALIDATE TOKEN
    runWithErrorHandling(async () => {
        const { body: {company, name, sku, category, cost, averageCost, description, minStock, stock} } = req

        await createInventoryItem({company, name, sku, category, cost, averageCost, description, minStock, stock})

        res.status(204).send()
    
    }, res, logger)
}

module.exports = createInventoryItemHandler