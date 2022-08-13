function retrieveNotes(userId, callback){
    //TODO validate inputs

    const user = users.find(user => {
        return user.id === userId
    })
    // si user no existe => si hay error y lanza el mensaje
    if(!user){
        callback(new Error('user with id ' + userId +' not found'))
        return
    }   

    const filtered=notes.filter(note=>{
        return note.user === userId
    })

    filtered.reverse()
    //si no hay error el callback manda un "null" a la posicion de error del callback de retrieveNotes de index.js
    // y luego manda filtered a la posicion de notes
    callback(null, filtered)
}