function registerUser(name, email, password, callback) {
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (email.length < 6) throw new Error('email length is not valid') // email tipo a@b.cd tiene 6 caracteres
    if (!EMAIL_REGEX.test(email)) throw new error('email is not valid')
    
    const user = users.find(function(user) {
        return user.email === email
    })

    if (user) {
        callback(new Error ('user already exists'));
        return;
    } 
    users.push({
        id: 'user-' + Date.now(),
        name: name,
        email: email,
        password: password
    });

    callback(null)

    // const xhr = new XMLHttpRequest

    // // response

    // xhr.onload = function() {
    //     const status = xhr.status
        
    //     if (status >= 500) {
    //         callback(new Error(`Server error (${status})`))
    //     } else if (status >= 400) {
    //         callback(new Error(`Client error (${status})`))
    //     } else if (status === 201) {
    //         callback(null)
    //     }
    // }

    // // request

    // xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/user')

    // xhr.setRequestHeader('Content-type', 'application/json')

    // xhr.send(`{ "name": "${name}", "username": "${email}"}, "password": "${password}" }`)


}