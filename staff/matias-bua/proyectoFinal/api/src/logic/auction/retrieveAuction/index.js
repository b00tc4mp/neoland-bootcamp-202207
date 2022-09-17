const { User, Auction } = require('../../../models')
const { NotFoundError, SystemError } = require('errors')
const { verifyObjectIdString } = require('../../../utils')

function retrieveAuction(userId) {
    verifyObjectIdString(userId, 'user id')

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Auction.find({ user: userId }, 'author title description value image finalDate').lean()
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(auctions => {
            auctions.forEach(auction => {
                // sanitize
                debugger

                auction.id = auction._id.toString()
                delete auction._id

                delete auction.__v
            })

            return auctions
        })
}

module.exports = retrieveAuction