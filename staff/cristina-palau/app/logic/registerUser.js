function registerUser(name, email, password, callback) {
    if (typeof email !== 'string') throw new TypeError('register is not a string')
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (email.length < 6) throw new Error('email length is not valid')
    if (!EMAIL_REGEX.test(email)) throw new Error('email is not valid')

    if (typeof password !== 'string') throw new TypeError('password is not a string register')
    if (password.trim().length === 0) throw new Error('password is empty or blank')
    if (password.length < 8) throw new Error('password length is less than 8 characters')
    if (!PASS_REGEX.test(password)) {
        const passError = document.querySelector('.passerror')
        passError.classList.remove('off')
        return
    }

    // if (typeof answer !== 'string') throw new TypeError('answer is not a string')
    // if (answer.trim().length === 0) throw new Error('answer is empty or blank')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function reg')

    const xhr = new XMLHttpRequest

    // response

    xhr.onload = function() {
        const status = xhr.status

        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 201) 
            callback(null);
    }

    // request
    
    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send(`{ "name": "${name}", "username": "${email}", "password": "${password}"}`)
}