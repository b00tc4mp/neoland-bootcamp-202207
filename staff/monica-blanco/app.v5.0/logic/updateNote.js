function updateNote(userId, noteId, text, callback){
    if (typeof userId !== 'string') throw new TypeError('user id is not a string')
    if (userId.trim().length === 0) throw new Error('user id is empty or blank')

    if (typeof noteId !== 'string') throw new TypeError('note id is not a string')
    if (noteId.trim().length === 0) throw new Error('note id is empty or blank')

    if (typeof text !== 'string') throw new TypeError('text is not a string')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const user = users.find (user =>{
        return user.id === userId
    })

    if (!user){
        callback(new Error (`user with id ${userId} not found`))

        return
    }

    const note= notes.find(note =>{
        return note.id === noteId
    })
    if (!note){
        callback(new Error (`note with id ${noteId} not found`))

        return
    }
    if (note.user!== userId){
        callback (new Error(`note with id ' ${noteId} does not belong to user with id ${userId}`))

        return
    }
    note.text = text
    callback(null)
}