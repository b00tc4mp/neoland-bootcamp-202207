function authenticateUser(email, password, callback) {
    const user = users.find(function (user) {
        return user.email === email && user.password === password
    })

    if (user)
        callback(null)
    else
        callback(new Error('wrong credentials'))
}

function retrieveUser(email, callback) {
    const user = users.find(function (user) {
        return user.email === email
    })

    if (user)
        callback(null, user)
    else
        callback(new Error('user with email ' + email + ' not found'))
}

function registerUser(name, email, password, callback) {
    const user = users.find(function (user) {
        return user.email === email
    })

    if (!user) {
        users.push({
            name: name,
            email: email,
            password: password
        })

        callback(null)
    } else
        callback(new Error('user already exists'))
}