function retrieveNotes(userId, callback) {
    if (typeof userId !== 'string') throw new TypeError('user id is not a string')
    if (userId.trim().length === 0) throw new Error('user id is empty or blank')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const user = users.find(user => {
        return user.id === userId
    })

    if (!user) {
        callback(new Error(`user with id ${userId} not found`))

        return
    }

    const filtered = notes.filter(note => {
        return note.user === userId
    })
    filtered.reverse();

    callback(null, filtered)
}