module.exports = {
    authenticateUser: require('./user/authenticateUser'),
    registerUser: require('./user/registerUser'),
    updateEmail: require('./user/updateEmail'),
    retrieveUser: require('./user/retrieveUser'),
    updatePassword: require('./user/updatePassword'),
    createNote: require('./notes/createNote'),
    retrieveNotes: require('./notes/retrieveNotes'),
    updateNoteText: require('./notes/updateNoteText')
}