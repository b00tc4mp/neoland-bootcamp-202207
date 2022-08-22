function retrieveUser(email, callback) {    // esta logica se trata de recuperar el usuario y su informacion completa!
    if(typeof email !== 'string') throw new TypeError('email is not a string')
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (email.length < 6) throw new Error('email length is not valid')
    if (!EMAIL_REGEX.test(email)) throw new Error('email is not valid')
    if(typeof callback !== 'function') throw new TypeError('callback is not a function')

    const user = users.find(function (user){
        return user.email === email
    })

    if (!user) {
        callback(new Error('user with email' + email + 'not found'))

        return
    }

    callback(null, user)    
}