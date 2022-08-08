function authenticateUser(email, password, callback){
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (!mailRegex.test(email)) throw new Error('Email is not valid')
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (password.trim().length === 0) throw new Error('password is empty or blank')
    if (password.length < 8 || password.length > 15) throw new Error('password length is less than 8 characters or more than 15')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const user = users.find(function(user){
        return user.email === email && user.password === password
    })

    if(!user){
        callback(new Error('El usuario no existe o las credenciales son erroneas'))
        return
    }

    callback(null)
}