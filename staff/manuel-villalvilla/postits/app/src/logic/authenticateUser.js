const API_URL = process.env.REACT_APP_API_URL

function authenticateUser(email, password, callback) {
    const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (email.length < 6) throw new Error('email length is not valid') // email tipo a@b.cd tiene 6 caracteres
    if (!EMAIL_REGEX.test(email)) throw new Error('email is not valid')
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (password.trim().length === 0) throw new Error('password is empty or blank')
    if (password.length < 8) throw new Error('password length is less than 8 characters')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    // response

    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500) {
            callback(new Error(`Server error (${JSON.parse(xhr.response).error})`))
        } else if (status >= 400) {
            callback(new Error(`Client error (${JSON.parse(xhr.response).error})`))
        } else if (status === 200) {
            const json = xhr.responseText

            const data = JSON.parse(json)

            const token = data.token

            callback(null, token)

        }
    }

    // request
    
    xhr.open('POST', `${API_URL}/users/auth`)

    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send(`{ "email": "${email}", "password": "${password}" }`)
    
}

export default authenticateUser