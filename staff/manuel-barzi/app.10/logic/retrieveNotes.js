function retrieveNotes(userId, callback) {
    // TODO validate inputs

    const user = users.find(user => {
        return user.id === userId
    })

    if (!user) {
        callback(new Error('user with id ' + userId + ' not found'))

        return
    }

    const filtered = notes.filter(note => {
        return note.user === userId
    })

    filtered.reverse()

    callback(null, filtered)
}