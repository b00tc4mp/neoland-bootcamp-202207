function updateNote(userId, noteId, text, callback) {

    const user = users.find(user => {
        return user.id === userId
    })

    if (!user) {
        callback(new Error('user with id' + userId + ' not found'))
        return
    }

    const note = notes.find(note => {
        return note.id === noteId
    })

    if (!note) {
        callback(new Error('note with id ' + noteId + ' not found'))
        return
    }

    if (note.user !== userId) {
        callback(new Error('note with id ' + noteId + ' does not belong to user with id ' + userId))
        return
    }
    note.text = text

    callback(null)
}