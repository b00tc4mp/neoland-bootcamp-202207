const { Type: { ObjectId } } = require('mongoose')
const { FormatError } = require('../errors')

function validateObjectId(objectId, explain = 'Object Id') {
  if (!ObjectId.isValid(objectId)) throw new FormatError(`${explain} is not valid`)
}

module.export = validateObjectId