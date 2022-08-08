/**
 * @param {string} userId The user identifier
 * @param {string} noteId The note identifier
 * @param {string} title The note title 
 * @param {string} text The note text
 * 
 * @throws {TypeError} Error on failed verification inputs
 */

function updateNote(userId, noteId, title, text, callback){
    if(regexUserId.test(userId) === false) throw new Error(userId+' does not match ID pattern')
    if(typeof userId !== 'string') throw new Error(userId+ ' is not a string')
    if(!(callback instanceof Function)) throw new Error(callback +' is not a function')
    if(regexNoteId.test(noteId) === false) throw new Error(noteId+' does not match ID pattern')
    if(typeof noteId !== 'string') throw new Error(noteId + ' is not a string')
    if(typeof text !== 'string') throw new Error(text + ' is not a string')
    if(typeof title !== 'string') throw new Error(`${title} is not a string`)
    
    const user = users.find(user => {
        return user.id === userId
    })

    if(!user){
        callback(new Error('User with id ' + userId + ' not found'))
        
        return
    }

    const note = notes.find(note => {
        return note.id === noteId
    })

    if(!note) {
        callback(new Error('Note with id '+ noteId + ' not found'))

        return
    }

    if (note.user !== userId){
        callback(new Error('Note with id ' + noteId + ' does not belong to user with id ' + userId))

        return
    }
    note.title = title
    note.text = text
    callback(null)
}
