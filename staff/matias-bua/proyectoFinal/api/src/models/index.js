const { model } = require('mongoose')
const { user, auction, bid } = require('./schemas')

module.exports = {
    User: model('User', user),
    Auction: model('Auction', auction),
    Bid: model('Bid', bid)
}