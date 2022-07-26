/**
 * @param {string} userId The user identifier
 * @param {string} noteId The note identifier
 * 
 * @throws {TypeError} Error on failed verification inputs
 */

function deleteNote( userId, noteId, callback){
    // TODO validate inputs

    const user = users.find(user => {
        return user.id === userId
    })

    if(!user){
        callback(new Error(`User with id ${userId} not found`))
        return
    }
    
    const note = notes.find(note => {
        return note.id === noteId
    })
    const noteIndex = notes.findIndex(note => {
        return note.id === noteId
    })
    
    if(noteIndex < 0) {
        callback(new Error('Note with id '+ noteId + ' not found'))

        return
    }

    if (note.user !== userId){
        callback(new Error('Note with id ' + noteId + ' does not belong to user with id ' + userId))
        return
    }

    notes.splice(noteIndex,1)

}