function retrieveUser(email, callback) {
    //condicionales de entrada en el input
    //Si el email no es string, muestro el error ...
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    // .trim() borra los espacios del principio y final del texto 
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (email.length < 6) throw new Error('email length is not valid')
    if(!EMAIL_REGEX.test(email)) throw new Error('email is not valid')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const user = users.find(function (user) {
        return user.email === email
    })
    // si no exite user lanazar error
    if (!user) {
        callback(new Error('user with email' + email + 'not found'))

        return
    }
    callback(null, user)
}
