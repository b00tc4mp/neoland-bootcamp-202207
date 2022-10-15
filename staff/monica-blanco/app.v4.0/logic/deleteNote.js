/**
 * Deletes a notes from database
 * 
 * @param {string} userId The user identifier
 * @param {string} noteId the note identifier 
 * @param {function} callback the function expression that provides a result

 * @throws {TypeError} On invalid inputs
 */

function deleteNote (userId, noteId, callback){
    // TODO validate inputs

    const user = users.find (user =>{
        return user.id ===userId
    })

    if (!user){
        callback (new Error (`user with id ${userId} not found`))

        return
    }
    const noteIndex = notes.findIndex(note=>{
        return note.id === noteId
    })

    
    if (noteIndex === -1){
        callback (new Error(`note with id ${noteId} not found`))
        
        return
    }
    const note = notes [noteIndex]
    
    if (note.user !== userId){
        callback (new Error (`note with id ${noteId} does not belong to user with id ${userId}`))

        return
    }
    notes.splice(noteIndex,1)

    callback(null)
}