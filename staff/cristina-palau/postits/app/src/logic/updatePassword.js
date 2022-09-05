import { validateText, validatePassword, validateCallback } from 'validators'
import { ClientError, ServerError } from 'errors'
const API_URL = process.env.REACT_APP_API_URL

function updatePassword(token, oldPassword, newPassword, newPasswordRepeat, callback) {
    validateText(token)
    validatePassword(oldPassword, newPassword, newPasswordRepeat)
    validateCallback(callback)


    const xhr = new XMLHttpRequest
    // response

    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500)
            callback(new ServerError(`server error (${status})`))
        else if (status >= 400)
            callback(new ClientError(`client error (${status})`))
        else if (status === 204)
            callback(null)
    }

    // request

    xhr.open('PATCH', `${API_URL}/users`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-type', 'application/json')

    //const json2 = JSON.stringify({ notes: notes })
    xhr.send(`{ "oldPassword": "${oldPassword}", "newPassword": "${newPassword}", "newPasswordRepeat": "${newPasswordRepeat}"}`)

// request
}

export default updatePassword