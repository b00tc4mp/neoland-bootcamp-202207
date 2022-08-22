/*  aqui precisamente se mete la logica del main, 
que toda la logica de negocios se dirija en este
sector */
function authenticateUser(email, password, callback) {// esta logica se trata de autenticar tanto email como password!
    if(typeof email !== 'string') throw new TypeError('email is not string')
    if(email.trim().length === 0) throw new Error('email is empty or blank')
    if(email.lenght < 6) throw new Error ('email length is not valid')
    if (!EMAIL_REGEX.test(email)) throw new Error('email is not valid')
    if(typeof password != 'string') throw new TypeError('password is not a string')
    if(password.trim().length === 0) throw new Error ('password is empty or blank')
    if(password.lenght < 8) throw new Error ('password length is less than 8 characters')

    if(typeof callback !== 'function') throw new TypeError('callback is not a function')
      
    const user = users.find(function (user){
        return user.email === email && user.password === password
    })

    if (!user) {
        callback(new Error('wrong credentials'))

        return
    }

    callback(null)

}