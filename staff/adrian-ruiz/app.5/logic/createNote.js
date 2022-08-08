function createNote(userId, callback){
    if(regexUserId.test(userId) === false) throw new Error(userId+' does not match ID pattern')
    if(typeof userId !== 'string') throw new Error(userId+ ' is not a string')
    if(!(callback instanceof Function)) throw new Error(callback +' is not a function')
    
    const user = users.find(user => {
        return user.id === userId
    })

    if(!user){
        callback(new Error('User with id ' + userId + ' not found'))
        
        return
    }

    const note = {
        id: 'note-' + Date.now(),
        text: '',
        user: userId
    }

    notes.push(note)

    callback(null)
}