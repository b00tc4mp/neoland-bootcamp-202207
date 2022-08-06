function updateUserPassword(token,email, callback) {
    if(typeof token !== 'string') throw new TypeError('token is not a string')
    if(token.trim().length===0)throw new Error('token is empty or black')

    if(typeof email !== 'string') throw new TypeError('new email  is not a string')
    if(email.trim().length===0)throw new Error('new email is empty or black')
    if(email.length<8) throw new Error('new email length is less than 8 charcaters')

    if(typeof callback !== 'function')throw new TypeError('callback is nota a function')
    const xhr = new XMLHttpRequest

    // response

    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 204)
            callback(null)
    }

    //request
    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-type', 'application/json')

    const json = JSON.stringify({ username: email })

    xhr.send(json)
}
