
function registerUser(name, email, password, callback){
    
    if(nameRegex.test(name) === false) throw new Error ('\nName does not meet the requirements:\n- Between 1 and 20 characters\n- Exclusively letters\n- No Blanks')
    if (typeof email !== 'string') throw new TypeError('email is not string')
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (!mailRegex.test(email)) throw new Error('Email is not valid')

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