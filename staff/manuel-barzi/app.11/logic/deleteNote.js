/**
 * Deletes a note from database
 * 
 * @param {string} userId The user identifier
 * @param {string} noteId The note identifier
 * @param {function} callback The function expression that provides a result
 * 
 * @throws {TypeError} On invalid inputs
 */
function deleteNote(userId, noteId, callback) {
    // TODO validate inputs

    const user = users.find(user => {
        return user.id === userId
    })

    if (!user) {
        callback(new Error(`user with id ${userId} not found`))

        return
    }

    const noteIndex = notes.findIndex(note => {
        return note.id === noteId
    })

    const note = notes[noteIndex]

    if (!note) {
        callback(new Error(`note with id ${noteId} not found`))

        return
    }

    if (note.user !== userId) {
        callback(new Error(`note with id ${noteId} does not belong to user with id ${userId}`))

        return
    }

    notes.splice(noteIndex, 1)

    callback(null)
}