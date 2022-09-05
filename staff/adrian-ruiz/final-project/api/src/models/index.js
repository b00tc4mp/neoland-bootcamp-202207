const { model } = require('mongoose')
const { user, company, invoice, customer, inventoryItem, blacklist } = require('./schemas')

module.exports = {
    User: model('User', user),
    Company: model('Company', company),
    Invoice: model('Invoice', invoice),
    Customer: model('Customer', customer),
    InventoryItem: model('InventoryItem', inventoryItem),
    Blacklist: model('Blacklist', blacklist)
}