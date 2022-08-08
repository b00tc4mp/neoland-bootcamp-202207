function updateNote(userId, noteId, text, callback){
    if(regexUserId.test(userId) === false) throw new Error(userId+' does not match ID pattern')
    if(typeof userId !== 'string') throw new Error(userId+ ' is not a string')
    if(!(callback instanceof Function)) throw new Error(callback +' is not a function')

    // TODO 
    // note ID verification
    // text verify

    // Puedo recuperar el userId de la SessionStorage?
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

    note.text = text
    callback(null)
}
