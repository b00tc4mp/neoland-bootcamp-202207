const { User, City } = require ('../../../models')
const { NotFoundError, SystemError } = require('errors')
const { verifyObjectIdString } = require('../../../utils')
const {validateString } = require('validators')

/**
 * Creates a note for a user.
 * 
 * @param {string} userId The user id.
 * @param {string} query The note text.
 * 
 * @returns {Promise}
 *
 * @throws {TypeError} If any of the arguments does not match the expected type.
 * @throws {FormatError} If any of the arguments does not match the expected format.
 * 
 * @throws {NotFoundError} If the user is not found.
 * @throws {SystemError} If an error happens in db.
 */
function searchCities(userId, query = '') {
    verifyObjectIdString(userId, 'user id')
    validateString('query')
    

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(city => {
            if (!city) throw new NotFoundError(`city with id ${userId} not found`)

            return City.search({ user: user._id,})
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(city => { 
            city.forEach(city =>{

                city.id = city._id.toString()
                delete city._id

                delete city.__v

            })
        })
}

module.exports = searchCities