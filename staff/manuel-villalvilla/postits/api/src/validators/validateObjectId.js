const { Types: { ObjectId: { isValid } } } = require('mongoose')
const { FormatError } = require('../errors')

module.exports = function(userId) {
    if (!isValid(userId)) throw new FormatError('user id not valid')
}