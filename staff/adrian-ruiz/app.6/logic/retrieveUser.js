/**
 * @param {string} email The user email
 * @throws {TypeError} Error on failed verification inputs
 */

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

    //Quitamos la password del user que mandamos para la aplicación, por motivos de seguridad
    const _user = {
        id: user.id,
        name: user.name,
        email: user.email,
    }

    callback(null, _user)

}