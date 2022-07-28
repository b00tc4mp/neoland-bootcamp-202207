function retrieveUser(userId, callback) {
    if (typeof userId !== 'string') throw new TypeError('email is not a string')
    if (userId.trim().length === 0) throw new Error('email is empty or blank')
   
    
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const user = users.find(function (user) {
        return user.id === userId
    })

    if (!user) {
        callback(new Error('user with id ' + userId + ' not found'))
        return
    }

    const _user = {
        id: user.id,
        name: user.name,
        email: user.email
    }

    callback(null, _user)
}




