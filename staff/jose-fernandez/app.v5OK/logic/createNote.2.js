function createNote(userId, text, callback) {
    const user = users.find(function(user){
        return user.id===userId
    })

    //si user ya existe lanzar error user exists
    // if(user){
    //     callback(new Error('user already exists'))
    //     return
    // }
   

    
    if (!user) {
        callback(new Error('user with id' + userId + 'not found'))
        
        return
    }
    const note = {
        id:'notes-'+ Date.now(),
       text: text,
       user:userId
    }
    notes.push(note)

    
    callback(null)
    
}