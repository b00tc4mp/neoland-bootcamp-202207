function createNote(userId, callback) {
    const user = users.find(function(user){
        return user.id===userId
    })

    //si user ya existe lanzar error user exists
    // if(user){
    //     callback(new Error('user already exists'))
    //     return
    // }
   

    
    if (!user) {
        callback(new Error('user with email' + email + 'not found'))
        
        return
    }
    notes.push({
       id:'notes-'+ Date.now(),
       text:'text',
       user:userId
    })

    callback(null)
    
}