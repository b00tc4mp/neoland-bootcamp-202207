function retrieveUser(email, callback){
    if (typeof email !== 'string') throw new TypeError('Email is not string')
    if (email.trim().length === 0) throw new Error('Email is empty or blank')
    if (!mailRegex.test(email)) throw new Error('Email is not valid')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
    const user = users.find(function(user){
        return user.email === email
    })

    if(!user){
        callback(new Error('User with email ' + email +' not found'))
        return
    }

    callback(null, user)

}