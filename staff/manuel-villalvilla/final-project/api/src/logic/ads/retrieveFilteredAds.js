const { Ad } = require("../../models")

module.exports = function(country, page, limit) {
    // TODO validate inputs
    return Ad.find({ country }).limit(limit * 1).skip((page - 1) * limit).lean()
        .then(ads => {
            return Ad.countDocuments({ country })
                .then(count => {
                    return {
                        ads,
                        totalPages: Math.ceil(count / limit),
                        currentPage: page
                    }
                })
        })
}