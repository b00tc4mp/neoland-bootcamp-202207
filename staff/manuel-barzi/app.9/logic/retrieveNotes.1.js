function retrieveNotes(userId, callback) {
    // TODO validate inputs

    const filtered = notes.filter(note => {
        return note.user === userId
    })

    callback(null, filtered)
}