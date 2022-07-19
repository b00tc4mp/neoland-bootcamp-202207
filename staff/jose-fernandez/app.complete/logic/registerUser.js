function registerUser(name,email, password, callback) {
    //condicionales de entrada en el input
    //Si el email no es string, muestro el error ...
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    // .trim() borra los espacios del principio y final del texto 
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (email.length < 6) throw new Error('email length is not valid')

    //falta validar el formato de email 

    if (typeof password !== 'string') throw new TypeError('email is not a string')
    if (password.trim().length === 0) throw new Error('password is empty or blanck')
    if (password.length < 8) throw new Error('password length is less than 8 characters')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
    
    const user = users.find(function(user){
        return user.email===email
    })

    //si user ya existe lanzar error user exists
    if(user){
        callback(new Error('user already exists'))
        return
    }
    users.push({
        name:name,
        email:email,
        password:password
    })
    callback(null)
}