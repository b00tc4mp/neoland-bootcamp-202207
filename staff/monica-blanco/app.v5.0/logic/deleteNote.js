/**
 * Deletes a notes from database
 * 
 * @param {string} userId The user identifier
 * @param {string} noteId the note identifier 
 * @param {function} callback the function expression that provides a result

 * @throws {TypeError} On invalid inputs
 */

function deleteNote (userId, noteId, callback){
    if (typeof userId !== 'string') throw new TypeError('user id is not a string')
    if (userId.trim().length === 0) throw new Error('user id is empty or blank')

    if (typeof noteId !== 'string') throw new TypeError('note id is not a string')
    if (noteId.trim().length === 0) throw new Error('note id is empty or blank')

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

    if (note.user !== userId) {
        callback(new Error(`note with id ${noteId} does not belong to user with id ${userId}`))

        return
    }

    notes.splice(noteIndex, 1)

    callback(null)
}


    
    // if (noteIndex === -1){
    //     callback (new Error(`note with id ${noteId} not found`))
        
    //     return
    // }
