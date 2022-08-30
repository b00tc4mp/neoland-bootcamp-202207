const updateEmail = require('./updateEmail');

module.exports = {
    authenticateUser: require('./authenticateUser'),
    registerUser: require('./registerUser'),
    updateEmail: require('./updateEmail'),
    retrieveUser: require('./retrieveUser'),
    updatePassword: require('./updatePassword'),
    createNote: require('./createNote'),
    retrieveNotes: require('./retrieveNotes')
}