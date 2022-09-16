const { User, City } = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
const { verifyObjectIdString } = require('../../../utils')
const {validateString } = require('validators')


function searchCities(userId, query) {
    verifyObjectIdString(userId, 'user id')
    validateString(query)



    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
           const  q = (query)
           const  re = new RegExp (`(?:^|\\s)(${q}\\w*)`) 


            return City.find({ name: { $regex: re , $options: 'i'} }).lean()
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(cities => {
            cities.forEach(city => {
                // sanitize
        

                city.id = city._id.toString()
                delete city._id

                delete city.places

                delete city.__v
            })

            return cities
        })
}

module.exports = searchCities