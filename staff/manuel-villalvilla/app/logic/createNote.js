function createNote(userId, callback) {
    // TODO input validation

    const user = users.find(user => {
        return user.id === userId
    })

    if(!user) {
        callback(new Error('user with id ' + userId + ' does not exist'))
        return;
    }

    notes.push({
        id: 'note-' + Date.now(),
        text: '',
        user: userId
    })

    callback(null)
}