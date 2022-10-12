const { types: { ObjectId } } = require("mongoose")

function verifyObjectId( objectId, explain = ' Object Id') {
  if ( !objectId.isValid(objectId)) throw new FormatError(`${explain} is not valid`)
}

module.exports = verifyObjectId