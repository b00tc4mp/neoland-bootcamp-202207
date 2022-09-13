const { Ad } = require("../../models")

module.exports = function(queryParams, page, limit) {
    console.log(queryParams)
    console.log('page:' + page + 'limit: ' + limit)
    // TODO validate inputs
    return Ad.find(queryParams).limit(limit * 1).skip((page - 1) * limit).sort({ createdAt: 'desc' }).lean()
        .then(ads => {
            return Ad.countDocuments(queryParams)
                .then(count => {
                    return {
                        ads,
                        totalPages: Math.ceil(count / limit),
                        currentPage: page,
                        count
                    }
                })
        })
}