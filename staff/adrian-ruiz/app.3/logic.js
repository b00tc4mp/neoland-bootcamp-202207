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

function retrieveUser(email, callback){
    if (typeof email !== 'string') throw new TypeError('email is not string')
    if (email.trim().length === 0) throw new Error('El email está vacio o en blanco')
    if (email.length < 6) throw new Error('La longitud del email no es válida')
    // TODO validate email format (username@domain.xyz)

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


function registerUser(name, email, password, callback){
    
    if(nameRegex.test(name) === false) throw new Error ('\nName does not meet the requirements:\n- Between 1 and 20 characters\n- Exclusively letters\n- No Blanks')
    if (typeof email !== 'string') throw new TypeError('\nemail is not a string')
    if (email.trim().length === 0) throw new Error('\nEmail is empty or blank')
    if (email.length < 6) throw new Error('\nEmail length is not valid')
    // TODO validate email format (username@domain.xyz)

    if(!(password.match(requiredPass))) throw new Error('\nPassword does not meet the requirements: \n- Between 8 and 15 characters\n- At least 1 capital letter\n- At least 1 lowercase letter\n- At least 1 symbol')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    
        const user = users.find(function (user) {
            return user.email === email
        })

        if(user){
            callback(new Error('El correo electrónico ya ha sido registrado'))
            return
        }

            users.push(
                {
                    name: name,
                    email: email,
                    password: password
                }
            )
            callback(null)
            return   
    }
    



// Funcion activar rotación DIVS menú (Lanzamos funcion desde HTML)
function myFunction(x) {
    x.classList.toggle("change");
  }