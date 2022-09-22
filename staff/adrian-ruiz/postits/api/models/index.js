const { model } = require('mongoose')
const { user, note, blacklist } = require('./schemas')

module.exports = {
    User: model('User', user),
    Note: model('Note', note),
    Blacklist: model('Blacklist', blacklist )
}