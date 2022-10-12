function authenticateUser(email, password, callback) {
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