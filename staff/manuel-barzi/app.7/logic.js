const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

function authenticateUser(email, password, callback) {
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (email.length < 6) throw new Error('email length is not valid')
    if (!EMAIL_REGEX.test(email)) throw new Error('email is not valid')

    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (password.trim().length === 0) throw new Error('password is empty or blank')
    if (password.length < 8) throw new Error('password length is less than 8 characters')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const user = users.find(function (user) {
        return user.email === email && user.password === password
    })

    if (!user) {
        callback(new Error('wrong credentials'))

        return
    }

    callback(null)
}

function retrieveUser(email, callback) {
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (email.length < 6) throw new Error('email length is not valid')
    if (!EMAIL_REGEX.test(email)) throw new Error('email is not valid')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
    
    const user = users.find(function (user) {
        return user.email === email
    })

    if (!user) {
        callback(new Error('user with email ' + email + ' not found'))

        return
    }

    callback(null, user)
}

function registerUser(name, email, password, callback) {
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (email.length < 6) throw new Error('email length is not valid')
    if (!EMAIL_REGEX.test(email)) throw new Error('email is not valid')

    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (password.trim().length === 0) throw new Error('password is empty or blank')
    if (password.length < 8) throw new Error('password length is less than 8 characters')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const user = users.find(function (user) {
        return user.email === email
    })

    if (user) {
        callback(new Error('user already exists'))

        return
    }

    users.push({
        name: name,
        email: email,
        password: password
    })

    callback(null)
}