function createNote(notes, user, callback){
    const newNote = {
        id: "note-"+ Date.now(),
        text: "prueba prueba",
        user: user.id
    }
    if(!user.id){
        callback(new Error(user.id + "is not the correct one"))
        return
    }
    notes.push(newNote)
    callback(null, newNote)
    return newNote 
}