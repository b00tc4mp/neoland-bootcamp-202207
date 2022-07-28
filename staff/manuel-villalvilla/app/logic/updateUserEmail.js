function updateUserEmail (token, newEmail, callback) {
    // {
    //     "username" : "otroemail@email.com"
    // }
    if (typeof token !== 'string') throw new TypeError('user id is not a string')
    if (token.trim().length === 0) throw new Error('user id is empty or blank')

    if (typeof newEmail !== 'string') throw new TypeError('email is not a string')
    if (newEmail.trim().length === 0) throw new Error('email is empty or blank')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')


    const newData = {
        username: newEmail
    }

    const xhr = new XMLHttpRequest

    // response
    xhr.onload = function() {
        const status = xhr.status

        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${JSON.parse(xhr.response).error})`))
        else if (status === 204) {
            callback(null)
        }
    }

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send(JSON.stringify(newData))
}