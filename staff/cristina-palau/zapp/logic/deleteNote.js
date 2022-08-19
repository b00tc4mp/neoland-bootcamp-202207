/**
 * Deletes a note from database
 * 
 * @param {string} userId The user identifier
 * @param {string} noteId The note identifier
 * @param {funcion} callbback The function expression that provides a result
 *
 * @throws {TypeError} On invalid inputs
 */

function deleteNote(userId, noteId, callback) {
    
    if (typeof userId !== 'string') throw new TypeError('user id is not a string')
    if (userId.trim().length === 0) throw new Error('user id is empty or blank')
    if (typeof noteId !== 'string') throw new TypeError('note id is not a string')
    if (userId.trim().length === 0) throw new Error('note id is empty or blank')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

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

    notes.splice(noteIndex, 1)

    callback(null)
}
