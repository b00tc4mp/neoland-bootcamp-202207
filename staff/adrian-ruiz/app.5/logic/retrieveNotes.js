function retrieveNotes(userId, callback) {
    if(regexUserId.test(userId) === false) throw new Error(userId+' does not match ID pattern')
    if(typeof userId !== 'string') throw new Error(userId+ ' is not a string')
    if(!(callback instanceof Function)) throw new Error(callback+' is not a function')
    // CUANDO CREAMOS UNA NOTA DESDE EL HOME, HAY QUE VERIFICAR QUE EL USUARIO QUE QUIERE RECUPERAR LA NOTA ES EL CORRECTO

    const user = users.find(user => {
        return user.id === userId
    })

    if(!user){
        callback(new Error('User with id '+ userId +'not found'))
        return
    }

    const filtered = notes.filter(note => {
        return note.user === userId
    })

    callback(null, filtered)
}
