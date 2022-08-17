function updateUserPassword (token, oldPassword, newPassword, newPasswordRepeat, callback) {
    if (typeof token !== 'string') throw new TypeError('user id is not a string')
    if (token.trim().length === 0) throw new Error('user id is empty or blank')

    if (typeof oldPassword !== 'string') throw new TypeError('current password is not a string')
    if (oldPassword.trim().length === 0) throw new Error('current password is empty or blank')
    if (oldPassword.length < 8) throw new Error('password length is less than 8 characters')

    if (typeof newPassword !== 'string') throw new TypeError('new password is not a string')
    if (newPassword.trim().length === 0) throw new Error('new password is empty or blank')
    if (newPassword.length < 8) throw new Error('password length is less than 8 characters')

    if (typeof newPasswordRepeat !== 'string') throw new TypeError('repeated password is not a string')
    if (newPasswordRepeat.trim().length === 0) throw new Error('repeated password is empty or blank')
    if (newPasswordRepeat.length < 8) throw new Error('password length is less than 8 characters')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    if (newPassword !== newPasswordRepeat) throw new Error('new passwords must be identical')

    // {
    //     "oldPassword": "123123123",
    //     "password": "234234234"
    // }

    const newData = {
        oldPassword,
        password: newPassword
    }

    const xhr = new XMLHttpRequest

    // response
    xhr.onload = function() {
        const status = xhr.status

        if (status >= 500)
            callback(new Error(`server error (${JSON.parse(xhr.response).error})`))
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