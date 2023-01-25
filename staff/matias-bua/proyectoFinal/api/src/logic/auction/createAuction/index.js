const { User, Auction } = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
const { validateString, validateText, validateDate } = require('validators')
const { verifyObjectIdString } = require('../../../utils')

/**
 * Creates a Auction for a user.
 * 
 * @param {ObjectId} userId The user id.
 * @param {string} text The Auction text.
 * 
 * @returns {Promise}
 *
 * @throws {TypeError} If any of the arguments does not match the expected type.
 * @throws {FormatError} If any of the arguments does not match the expected format.
 * 
 * @throws {NotFoundError} If the user is not found.
 * @throws {SystemError} If an error happens in db.
 */
 function createAuction(author, title, description, value, image, finalDate /*initialDate*/) {
    // verifyObjectIdString(author, 'author')
    validateText(title, 'title')
    if( description) validateString(description)
    if (value !== validateString)
    validateString(image, 'image')
    validateDate(finalDate, 'finalDate')
    
//.lean() objectId --> user._id -->user.id
    return User.findById(author).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${author} not found`)

            // const year = date.getFullYear()
            // const month = date.getMonth()
            // const day = finalDate.getDate()

            // const sanitizedDate = new Date(year,month,day)

            return Auction.create({ author, title, description, value, image, finalDate, currentValue: value})
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(auction => { })
}

module.exports = createAuction