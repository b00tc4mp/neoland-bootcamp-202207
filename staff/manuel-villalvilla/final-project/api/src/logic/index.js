module.exports = {
    authenticateUser: require('./user/authenticateUser'),
    registerUser: require('./user/registerUser'),
    updateEmail: require('./user/updateEmail'),
    retrieveUser: require('./user/retrieveUser'),
    updatePassword: require('./user/updatePassword'),
    createAd: require('./userAds/createAd'),
    retrieveAds: require('./userAds/retrieveAds'),
    updateAdText: require('./userAds/updateAdBody'),
    updateAdVisibility: require('./userAds/updateAdVisibility'),
    deleteAd: require('./userAds/deleteAd'),
    retrieveFilteredAds: require('./ads/retrieveFilteredAds'),
    retrieveAdWithId: require('./ads/retrieveAdWithId')
}