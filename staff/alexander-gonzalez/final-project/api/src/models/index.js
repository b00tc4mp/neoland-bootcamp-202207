const { model } = require('mongoose')
const { place, user, city } = require('./schemas')

module.exports = {
    User: model('User', user),
    Place: model('Place', place),
    City: model('City', city)
}